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
        $questions = json_encode('[
            {
                "uuid":"4691b118-ee23-4eb3-94ae-0edbda26a802","question":"Full house?","selected_answers":{"uuid":"36cb6c4d-624c-46fa-8abc-4b6f082c5752"}
            },
            {
                "uuid":"e7e3e9d1-997d-4226-a1ec-7e14cc79da4c","question":"Do you like painting?","selected_answers":{"uuid":"e2eda581-2204-4143-87b0-9f28961366dc"}
            }
        ]');
        $url = (string)URLShortener::shorten(route('lead.index'));
        $questions = json_decode(json_decode($questions), true);
        $qtemplate = "<ol>";

        foreach($questions as $question){
            $qtemplate.='<li><b>'.$question['question'].'</b><ul>';
            foreach ($question['selected_answers'] as $answer) {
                $ans = Answer::find($answer);
                if($ans !== null && $ans->count() > 0){
                    $qtemplate.='<li>'.$ans->answer.'</li>';
                }
            }
            $qtemplate.='</ul></li>';
        }
        $qtemplate .= '</ol>';
        return $this->from('peersvc@peersvc.com')->view('emails.leads.assigned')->with(['url' => $url, 'questions' => $qtemplate]);
    }
}
