import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import TableInfo from './TableInfo'

class TabInfo extends Component {
    render() {
        return (
            <div className='tabInfoSecrectSanta'>
                <Tabs>
                    <Tab
                        icon={<FontIcon className="material-icons">phone</FontIcon>}
                        label="RECENTS"
                        >
                        Dates!!
                    </Tab>
                    <Tab
                        icon={<FontIcon className="material-icons">favorite</FontIcon>}
                        label="FAVORITES"
                        >
                        Invited People!
                        <TableInfo />
                    </Tab>
                    <Tab
                        icon={<MapsPersonPin />}
                        label="NEARBY"
                        >
                        Rules!
                         </Tab>
                </Tabs>
            </div>
        )
    }
}

export default TabInfo;
