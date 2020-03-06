import React, { useState, useRef } from 'react';
import { Card, PopOver, Icon, Button, Table, Collapse, BackTopBtn, CopyToClipboard, Switch, Select } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

const keys = ['property', 'description', 'default', 'type', 'value'];
const items = [
    { 
        property: 'trigger', 
        description: 'Set pop over trigger', 
        default: 'click', 
        type: 'string',
        value: 'click | hover'
    },
    { 
        property: 'control', 
        description: 'Allow pop over custom state control', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'visible', 
        description: 'Set custom state (active if control prop set)', 
        default: '', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'onClose', 
        description: 'Invokes on pop over close button click and blur', 
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'noBlur', 
        description: 'Disable closeing popover on blur (has effect with control prop)', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'title',
        description: 'Set pop over title', 
        default: '', 
        type: '',
        value: ''
    },
    { 
        property: 'content',
        description: 'Set content in pop over body', 
        default: '', 
        type: 'any',
        value: ''
    },
    { 
        property: 'position', 
        description: 'Set popover position', 
        default: 'top', 
        type: 'string',
        value: 'top | bottom | right | left'
    },
    { 
        property: 'dark', 
        description: 'Set dark mode', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'className',
        description: 'Set a custom css class to component', 
        default: '', 
        type: 'string',
        value: ''
    }
]

const usage = 
`// Usage examples
import React, { useState } from 'react';
import { PopOver, Button, Select, Icon, Switch } from '@assenti/react-ui-components';
const positions = ['left', 'top', 'bottom', 'right'];

function Example() {
    const [visible, setVisible] = useState(false);
    const [trigger, setTrigger] = useState(false);
    const [dark, setDark] = useState(false);
    const [control, setControl] = useState(false);
    const [position, setPosition] = useState(positions[0]);

    return (
        <div>
            <Select
                items={positions}
                prefix={<Icon name="book-open"/>}
                width={200}
                label="PopOver position"
                color="primary"
                className="my-10"
                value={position}
                onChange={v => setPosition(v)}/>
            <br/>
            <Switch 
                check={trigger} 
                color="primary"
                leftLabel="Hover" 
                rightLabel="Click" 
                className="my-10"
                onChange={() => setTrigger(!trigger)}/>
            <br/>
            <Switch 
                check={dark} 
                color="primary"
                rightLabel="Dark" 
                className="my-10"
                onChange={() => setDark(!dark)}/>
            <br/>
            <Switch 
                check={control} 
                color="primary"
                rightLabel="Control state" 
                className="my-10"
                onChange={() => setControl(!control)}/>
            <div className="row justify-center py-30">
                <PopOver 
                    title="Quit"
                    dark={dark}
                    trigger={trigger ? 'click' : 'hover'}
                    position={position}
                    control={control}
                    visible={visible}
                    onClose={() => setVisible(false)}
                    content={
                        <div>
                            <p>Are are sure?</p>
                            <div className="row align-center justify-center">
                                <Button 
                                    name="Nope" 
                                    color="secondary" 
                                    className="mr-5"
                                    onClick={() => console.log('Nope!')}/>
                                <Button 
                                    name="Yeap" 
                                    color="primary" 
                                    onClick={() => console.log('Yeap!')}/>
                            </div>
                        </div>
                    }>
                    <Button
                        onClick={() => control ? setVisible(true) : {}} 
                        name="Get started" 
                        color="primary"/>
                </PopOver>
            </div>
        </div>
    )
}`
const positions = ['left', 'top', 'bottom', 'right'];

const PopOverPage = () => {
    const [visible, setVisible] = useState(false);
    const [trigger, setTrigger] = useState(false);
    const [dark, setDark] = useState(false);
    const [control, setControl] = useState(false);
    const [position, setPosition] = useState(positions[1]);
    const parent = useRef();

    return (
        <div className="rui-page" ref={parent}>
            <div className="row align-center space-between">
                <div className="rui-page-title">PopOver Component</div>
            </div>
            <Card outlined title="PopOver usage">
                <Select
                    items={positions}
                    prefix={<Icon name="book-open"/>}
                    width={200}
                    label="PopOver position"
                    color="primary"
                    className="my-10"
                    value={position}
                    onChange={v => setPosition(v)}/>
                <br/>
                <Switch 
                    check={trigger} 
                    color="primary"
                    leftLabel="Hover" 
                    rightLabel="Click" 
                    className="my-10"
                    onChange={() => setTrigger(!trigger)}/>
                <br/>
                <Switch 
                    check={dark} 
                    color="primary"
                    rightLabel="Dark" 
                    className="my-10"
                    onChange={() => setDark(!dark)}/>
                <br/>
                <Switch 
                    check={control} 
                    color="primary"
                    rightLabel="Control state" 
                    className="my-10"
                    onChange={() => setControl(!control)}/>
                <div className="row justify-center py-30">
                    <PopOver 
                        title="Quit"
                        dark={dark}
                        trigger={trigger ? 'click' : 'hover'}
                        position={position}
                        control={control}
                        visible={visible}
                        onClose={() => setVisible(false)}
                        content={
                            <div>
                                <p>Are are sure?</p>
                                <div className="row align-center justify-center">
                                    <Button 
                                        name="Nope" 
                                        color="secondary" 
                                        className="mr-5"
                                        onClick={() => console.log('Nope!')}/>
                                    <Button 
                                        name="Yeap" 
                                        color="primary" 
                                        onClick={() => console.log('Yeap!')}/>
                                </div>
                            </div>
                        }>
                        <Button
                            onClick={() => control ? setVisible(true) : {}} 
                            name="Get started" 
                            color="primary"/>
                    </PopOver>
                </div>
                <Collapse 
                    icon="code" 
                    iconSize={18}
                    extra={<CopyToClipboard defaultText="Copy code" text={usage} className="mr-10"/>}
                    contentStyles={{ padding: 0 }}
                    tooltip="Show/Hide Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {usage}
                    </SyntaxHighlighter> 
                </Collapse>
            </Card>
            <h2>API</h2>
            <BackTopBtn setRef={parent} dark size="medium"/>
            <Table
                bordered
                headers={['Property', 'Description', 'Default', 'Type', 'Value']}
                items={items}
                index={true}
                itemTitles={keys}/>
        </div>
    )
}
export default PopOverPage;