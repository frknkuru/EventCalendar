import { Button, Icon, Item, Label, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Activity } from "../../../app/models/activity";
import { format } from "date-fns";
import ActivityListItemAttendee from "./ActivityListItemAttendee";
import { useState } from "react";

interface Props {
    activity: Activity
}

export default observer(function ActivityListItem({ activity }: Props) {
    const [hover, setHover] = useState(false);
    const labelStyle = {
        transform: hover ? 'scale(1.03)' : 'none',
        transition: 'transform 0.3s ease' // This will ensure the scaling is smooth
    }
    return (
        <Segment.Group
            style={labelStyle}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
            <Segment>
                {activity.isCancelled && (
                    <Label
                        attached="top"
                        color="red"
                        content='Cancelled'
                        style={{ textAlign: 'center' }}
                    />
                )}
                {activity.isGoing && (
                    <Label
                        attached="top"
                        color="teal"
                        content='You are going.'
                        style={{ textAlign: 'center' }}
                    />
                )}
                <Item.Group>
                    <Item>
                        <Item.Image style={{ marginBottom: 3 }} size="tiny" circular src='/assets/user.png' />
                        <Item.Content>
                            <Item.Header as={Link} to={`/activities/${activity.id}`}>
                                {activity.title}
                            </Item.Header>
                            {activity.isHost && (
                                <Item.Description>
                                    <Label basic color="orange">
                                        You are hosting this activity
                                    </Label>
                                </Item.Description>
                            )}
                            {activity.isGoing && !activity.isHost && (
                                <Item.Description>
                                    <Label basic color="green">
                                        You are going to this activity
                                    </Label>
                                </Item.Description>
                            )}
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' /> {format(activity.date!, 'dd MMM yyyy h:mm aa')}
                    <Icon name='marker' /> {activity.venue}
                </span>
            </Segment>
            <Segment secondary>
                <ActivityListItemAttendee attendees={activity.attendees!} />
            </Segment>

            {/* We need to clear because of we are using float */}
            <Segment clearing>
                <span>
                    {activity.description}
                </span>
                <Button
                    as={Link}
                    to={`/activities/${activity.id}`}
                    color='teal'
                    floated="right"
                    content='View' />
            </Segment>
        </Segment.Group>
    )

})