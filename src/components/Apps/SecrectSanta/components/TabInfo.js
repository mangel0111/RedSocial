import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import PeopleInvited from './PeopleInvited';
import Dates from './Dates';
import Rules from './Rules';
;
class TabInfo extends Component {
    render() {
        return (
            <div className='tabInfoSecrectSanta'>
                <Tabs>
                    <Tab
                        icon={<FontIcon className="material-icons">card_giftcard</FontIcon>}
                        label="Rules"
                        >
                        <div className='tabInfoContainer'>
                            <Rules />
                        </div>
                    </Tab>
                    <Tab
                        icon={<FontIcon className="material-icons">date_range</FontIcon>}
                        label="Dates"
                        >
                        <div className='tabInfoContainer'>
                            <Dates />
                        </div>
                    </Tab>
                    <Tab
                        icon={<FontIcon className="material-icons">assignment_ind</FontIcon>}
                        label="People"
                        >
                        <div className='tabInfoContainer'>
                            <PeopleInvited />
                        </div>

                    </Tab>
                </Tabs>
            </div>
        )
    }
}

export default TabInfo;
