import { Button, Card, FormField, Label, Segment } from "semantic-ui-react";
import { useEffect, useState } from "react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Activity } from "../../../app/models/activity";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { v4 as uuid } from 'uuid';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import MyTextInput from "../../../app/common/form/MyTextInput";

export default observer(function ActivityForm() {

    const { activityStore } = useStore();
    const { createActivity, updateActivity, loading, loadActivity, loadingInitial } = activityStore;

    const { id } = useParams()
    const navigate = useNavigate()

    const [activity, setActivity] = useState<Activity>({
        id: '',
        title: '',
        date: '',
        description: '',
        category: '',
        city: '',
        venue: ''
    })

    const validationSchema = Yup.object({
        title: Yup.string().required('The activity title is required'),
        description: Yup.string().required('The activity description is required'),
        category: Yup.string().required('The activity category is required'),
        date: Yup.string().required('The activity date is required'),
        venue: Yup.string().required('The activity venue is required'),
        city: Yup.string().required('The activity city is required'),


    })

    useEffect(() => {
        if (id) loadActivity(id).then(activity => setActivity(activity!))
    }, [id, loadActivity])

    // function handleSubmit() {
    //     if (!activity.id) {
    //         activity.id = uuid()
    //         createActivity(activity).then(() => navigate(`/activities/${activity.id}`))
    //     } else {
    //         updateActivity(activity).then(() => navigate(`/activities/${activity.id}`))
    //     }
    // }

    // function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    //     const { name, value } = event.target
    //     setActivity({ ...activity, [name]: value })
    // }

    if (loadingInitial) return <LoadingComponent content="Loading Activity...." />
    return (
        <Segment>
            <Card fluid>
                <Card.Content>
                    <Formik validationSchema={validationSchema} enableReinitialize initialValues={activity} onSubmit={values => console.log(values)}>
                        {({ handleSubmit }) => (
                            <Form className="ui form" onSubmit={handleSubmit} autoComplete='off'>
                                <MyTextInput placeholder={"Title"} name={"title"} ></MyTextInput>
                                <MyTextInput placeholder='Description' name="description" />
                                <MyTextInput placeholder='Category' name="category" />
                                <MyTextInput placeholder='Date' name="date" />
                                <MyTextInput placeholder='City' name="city" />
                                <MyTextInput placeholder='Venue' name="venue" />
                                <Button loading={loading} floated="right" positive type="submit" content='Submit' />
                                <Button floated="right" as={NavLink} to='/activities' type="button" content='Cancel' />
                            </Form>
                        )}
                    </Formik>

                </Card.Content>
            </Card>
        </Segment>
    )
})