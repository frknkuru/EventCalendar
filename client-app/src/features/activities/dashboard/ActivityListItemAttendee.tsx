import { List, Image, Popup } from "semantic-ui-react";
import { Profile } from "../../../app/models/profile";
import { Link } from "react-router-dom";
import ProfileCard from "../../profiles/ProfileCard";

interface Props {
    attendees: Profile[]
}

export default function ActivityListItemAttendee({ attendees }: Props) {
    const styles = {
        borderColor: 'green',
        borderWidth: 2
    }

    return (
        <List horizontal>
            {attendees.map(attendee => (
                <Popup
                    hoverable
                    key={attendee.username}
                    trigger={
                        <List.Item key={attendee.username} as={Link} to={`/profiles/${attendee.username}`} >
                            <Image
                                size="mini"
                                circular
                                bordered
                                style={attendee.following ? styles : null}
                                src={attendee.image || `/assets/user.png`}></Image>
                        </List.Item>
                    }
                >
                    <Popup.Content>
                        <ProfileCard profile={attendee} />
                    </Popup.Content>
                </Popup>
            ))}
        </List>
    )
}