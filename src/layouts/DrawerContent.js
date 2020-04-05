import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { List, ListItem, Icon, Drawer, InputField, Dropdown, Switch, ThemeContext, AutoComplete } from '../components';
import { compare } from '../components';

export const DrawerContent = (props) => {
    const history = useHistory();
    const [search, setSearch] = useState('');
    const [list, setList] = useState(true);

    const handleItemClick = (item) => {
        history.push(item.path)
        setSearch('')
    }

    const searchedItems = () => {
        if (search) {
            return props.items
                .filter(item => item.name.toLowerCase().includes(search.toLowerCase()) && 
                    (item.path !== '/' &&
                    item.path !== '/helper'))
        } else {
            return []
        }
    }

    const handleKeyUp = (e) => {
        if (e.key === 'Escape') setSearch('')
    }

    const sortedRoutes = () => {
        let filtered = props.items
                            .sort((a, b) => compare(a, b, 'name', 'asc'))
                            .filter(item => item.path !== '/' && 
                                            item.path !== '/colors' &&
                                            item.path !== '/helper')
        return filtered;
    }
    
    return (
        <ThemeContext.Consumer>
            {theme => (
                <Drawer
                    drawer={props.drawer}
                    fullHeight
                    dark={theme}
                    onClose={() => props.onClose()}
                    headerCentered
                    header={<Icon 
                        name="react" 
                        size={30}
                        className="rotating" 
                        color="#61dafb"/>}>
                    <div className="row py-5 mx-5 justify-center sticky" 
                        style={{ top: 40, width: 'calc(100% - 10px)' }}>
                        <AutoComplete
                            width="100%"
                            items={sortedRoutes()}
                            onItemClick={item => handleItemClick(item)}
                            itemKey="name"
                            dark={theme}
                            prefix={<Icon name="search"/>}
                            whiteBackground
                            borderType="rounded"
                            placeholder="Search components"
                            listHeader={
                                <div className="fz-9 text-info py-10">
                                    Let's find your component
                                </div>}
                            footer={(filteredLength) => 
                                <div className="text-right fz-8 px-10 py-15">
                                    {filteredLength} results
                                </div>}/>
                    </div>
                    <List size="medium" dark={theme}>
                        <ListItem
                            right
                            icon="rocket"
                            isActiveItem={'/' === window.location.pathname}
                            onClick={() => handleItemClick({ path: '/'})}
                            itemTitle="name"
                            hover
                            noDivider
                            item="Getting started"/>
                        <ListItem
                            right
                            noDivider
                            icon="language-css-3"
                            isActiveItem={'/helper' === window.location.pathname}
                            onClick={() => handleItemClick({ path: '/helper'})}
                            itemTitle="name"
                            hover
                            item="Helper CSS classes"/>
                        <ListItem
                            noDivider
                            icon="toy-brick"
                            onClick={() => setList(!list)}
                            hover
                            item={<span>Components 
                                <small className="fw-bold ml-10 text-info">{sortedRoutes().length}</small>
                            </span>}
                            controls={<Icon 
                                        onClick={() => setList(!list)}
                                        size={20} 
                                        name={list ? 'chevron-up' : 'chevron-down'}/>}/>
                    </List>
                    {list ? 
                    <List className="pl-30" dark={theme}>
                        {sortedRoutes().map((item, index) => 
                            <ListItem
                                key={index}
                                right
                                noDivider
                                icon={item.icon ? item.icon : ''}
                                roundedActive
                                isActiveItem={item.path === window.location.pathname}
                                onClick={() => handleItemClick(item)}
                                className="no-select"
                                hover
                                item={item.name}/>
                        )}
                    </List> : ''}
                    <div className="row justify-center pt-15 mt-10" 
                        style={{ borderTop: '1px solid lightgray'}}>
                        <Switch color="primary" 
                            check={theme}
                            leftIcon="sun"
                            leftIconColor={props.dark ? '#fff' : ''}
                            rightIconColor={props.dark ? '#fff' : ''}
                            rightIcon="moon" 
                            onChange={() => props.onSwitch()}/>
                    </div>
                </Drawer>
            )}
        </ThemeContext.Consumer>
    )
}