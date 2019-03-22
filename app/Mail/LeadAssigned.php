<?php

namespace App\Mail;

use App\Lead;
use App\Answer;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;
use URLShortener;

class LeadAssigned extends Mailable
{
    use Queueable, SerializesModels;

    public $lead;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Lead $lead)
    {
        $this->lead = $lead;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {

        $url = (string)URLShortener::shorten(route('lead.index'));
        $questions = json_decode($this->lead->questions, true);
        $qtemplate = "<ol>";
        foreach ($questions['answeredQuestions'] as $question) {
            $qtemplate.='<li><b>'.$question['question'].'</b><ul>';
            foreach($question['selected_answers'] as $answer){
                if (is_array($answer)) {
                    /* Multi options question */
                    foreach($answer as $checkedAnswer) {
                        $ans = Answer::find($checkedAnswer);
                        if($ans !== null && $ans->count() > 0){
                            $qtemplate.='<li>'.$ans->answer.'</li>';
                        }
                    }
                } else {
                    /* Single choice question */
                    $ans = Answer::find($answer);
                    if($ans !== null && $ans->count() > 0){
                        $qtemplate.='<li>'.$ans->answer.'</li>';
                    }
                }
                
                
            }
            $qtemplate.='</ul></li>';
        }
        
        
        $qtemplate .= '</ol>';
        return $this->from('peersvc@peersvc.com')->view('emails.leads.assigned')->with(['url' => $url, 'questions' => $qtemplate]);
    }
}
