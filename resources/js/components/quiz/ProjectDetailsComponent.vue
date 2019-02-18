<template>
    <div class=" card  ">
        <div class="card-header">
            <strong>Lead Information</strong>
        </div>
        <div class="card-body"> 
            <div class="form-group">
                <textarea 
                    name="project_details" 
                    id="project_details" 
                    cols="30" 
                    rows="4" 
                    class="form-control"
                    v-model="projectDetails">
                </textarea>
            </div>
            <div class="form-group">
                <select name="deadline" id="deadline" v-model="deadline">
                    <option value="im-flexible">I'm flexible</option>
                    <option value="within-48-hours"></option>
                    <option value="within-a-week"></option>
                    <option value="within-a-month"></option>
                    <option value="within-a-year"></option>
                </select>
            </div>
            
            
            @component('components.form-group', [
                'inputs' => [
                    [
                        'type' => 'select',
                        'field' => 'deadline',
                        'label' => 'Deadline',
                        'items' => [
                            'im-flexible' => 'Im flexible', 
                            'within-48-hours' => 'Within 48 hours',
                            'within-a-week' => 'Within a week',
                            'within-a-month' => 'Within a month',
                            'within-a-year' => 'Within a year'],
                        'indexSelected' => $lead->deadline,
                        'inputSize' => 6
                    ],
                    [
                        'type' => 'select',
                        'field' => 'service_uuid',
                        'label' => 'Service',
                        'items' => $services,
                        'displayField' => 'service_description',
                        'keyField' => 'uuid',
                        'disabled' => true, 
                        'inputSize' => 6,
                        'indexSelected' => $lead->service_uuid                            
                    ]
                ]
            ])
            @endcomponent
        </div>
    </div>
</template>

<script>
import { PROJECT_DEADLINE } from '../../constants';

export default {
    computed: {
        projectDetails: {
            get() {
                return this.$store.state.projectDetails;
            },
            set(value) {
                this.$store.commit('', value);
            }
        },
        deadline: {
            get() {
                return this.$store.state.deadline;
            },
            set(value) {
                this.$store.commit('', value);
            }
        },
        service: {
            get() {
                return this.$store.state.service;
            },
            set(value) {
                this.$store.commit('', value);
            }
        },
        deadlineOptions() {
            return PROJECT_DEADLINE;
        }
    }
}
</script>
