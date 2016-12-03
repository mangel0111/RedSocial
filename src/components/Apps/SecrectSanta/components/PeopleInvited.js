import React, { Component } from 'react'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn }
    from 'material-ui/Table';
import { Tabs, Tab } from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';

const peopleAvailable = [
    {
        name: 'Steve Brown',
        status: 'Employed',
    },
    {
        name: 'Joyce Whitten',
        status: 'Employed',
    },
    {
        name: 'Samuel Roberts',
        status: 'Employed',
    },
    {
        name: 'Adam Moore',
        status: 'Employed',
    },
];

const peopleInvited = [
    {
        name: 'John Smith',
        status: 'Employed',
        selected: true,
    },
    {
        name: 'Randal White',
        status: 'Unemployed',
    },
    {
        name: 'Stephanie Sanders',
        status: 'Employed',
        selected: true,
    }
];

class PeopleInvited extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            fixedHeader: true,
            fixedFooter: true,
            stripedRows: false,
            showRowHover: true,
            selectable: true,
            multiSelectable: true,
            enableSelectAll: false,
            deselectOnClickaway: true,
            showCheckboxes: true
        };
    }
    render() {
        return (
            <div>
                In this section you can find information about the invited users and the available users!
                <Tabs>
                    <Tab
                        icon={<FontIcon className="material-icons">card_giftcard</FontIcon>}
                        label="People Invited"
                        >
                        <div className='tabInfoContainer'>
                            <Table
                                fixedHeader={this.state.fixedHeader}
                                fixedFooter={this.state.fixedFooter}
                                selectable={this.state.selectable}
                                multiSelectable={this.state.multiSelectable}
                                >
                                <TableHeader
                                    displaySelectAll={this.state.showCheckboxes}
                                    adjustForCheckbox={this.state.showCheckboxes}
                                    enableSelectAll={this.state.enableSelectAll}
                                    >
                                    <TableRow>
                                        <TableHeaderColumn colSpan="3" tooltip="Super Header" style={{ textAlign: 'center' }}>
                                            People Invited
                              </TableHeaderColumn>
                                    </TableRow>
                                    <TableRow>
                                        <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
                                        <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
                                        <TableHeaderColumn tooltip="The Status">Rol</TableHeaderColumn>
                                    </TableRow>
                                </TableHeader>
                                <TableBody
                                    displayRowCheckbox={this.state.showCheckboxes}
                                    deselectOnClickaway={this.state.deselectOnClickaway}
                                    showRowHover={this.state.showRowHover}
                                    stripedRows={this.state.stripedRows}
                                    >
                                    {peopleInvited.map((row, index) => (
                                        <TableRow key={index} selected={row.selected}>
                                            <TableRowColumn>{index}</TableRowColumn>
                                            <TableRowColumn>{row.name}</TableRowColumn>
                                            <TableRowColumn>{row.status}</TableRowColumn>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </Tab>
                    <Tab icon={<FontIcon className="material-icons">card_giftcard</FontIcon>}
                        label="People Available"
                        >
                        <div className='tabInfoContainer'>
                            <Table
                                fixedHeader={this.state.fixedHeader}
                                fixedFooter={this.state.fixedFooter}
                                selectable={this.state.selectable}
                                multiSelectable={this.state.multiSelectable}
                                >
                                <TableHeader
                                    displaySelectAll={this.state.showCheckboxes}
                                    adjustForCheckbox={this.state.showCheckboxes}
                                    enableSelectAll={this.state.enableSelectAll}
                                    >
                                    <TableRow>
                                        <TableHeaderColumn colSpan="3" tooltip="Super Header" style={{ textAlign: 'center' }}>
                                            People Available
                              </TableHeaderColumn>
                                    </TableRow>
                                    <TableRow>
                                        <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
                                        <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
                                        <TableHeaderColumn tooltip="The Status">Rol</TableHeaderColumn>
                                    </TableRow>
                                </TableHeader>
                                <TableBody
                                    displayRowCheckbox={this.state.showCheckboxes}
                                    deselectOnClickaway={this.state.deselectOnClickaway}
                                    showRowHover={this.state.showRowHover}
                                    stripedRows={this.state.stripedRows}
                                    >
                                    {peopleAvailable.map((row, index) => (
                                        <TableRow key={index} selected={row.selected}>
                                            <TableRowColumn>{index}</TableRowColumn>
                                            <TableRowColumn>{row.name}</TableRowColumn>
                                            <TableRowColumn>{row.status}</TableRowColumn>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}

export default PeopleInvited
