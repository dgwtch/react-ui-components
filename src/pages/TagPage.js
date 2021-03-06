import React, { useState } from 'react';
import { Tag, Button, Select, Icon, Switch, ThemeContext, Divider } from '../components';
import Page from '../layouts/Page';

const items = [
    { 
        property: 'lifted', 
        description: 'Lift up the Tag', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'color', 
        description: 'Set color of Tag from list', 
        default: '', 
        type: 'string',
        value: 'primary | info | success | error | dark | yellow'
    },
    { 
        property: 'borderType', 
        description: 'Set Tag borders',
        default: '', 
        type: 'string',
        value: 'tile | smooth | rounded'
    },
    { 
        property: 'uppercase',
        description: 'Transform text to upper case', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'small', 
        description: 'Set small tag size',
        default: '', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'tiny', 
        description: 'Set tiny tag size',
        default: '', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'tagRef',
        description: 'Set ref', 
        default: '', 
        type: 'React.RefObject',
        value: ''
    },
    { 
        property: 'closable',
        description: 'Enable close function', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'visible',
        description: 'Set Tag visible state', 
        default: 'true', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'onClose',
        description: 'Invokes on close icon click (has effect with closable prop)', 
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'style',
        description: 'Set a custom inline styles', 
        default: '', 
        type: 'object',
        value: ''
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
import React from 'react';
import { Tag } from '@assenti/react-ui-components';

function Example() {
    return (
        <>
            <Tag color="primary">
                Price: 1000
            </Tag>
        </>
    )
}`

const colors = ['primary', 'info', 'success', 'error', 'dark', 'yellow','secondary'];
const borders = ['default', 'smooth', 'rounded', 'tile'];

const TagPage = () => {
    const [visible, setVisible] = useState(true);
    const [outlined, setOutlined] = useState(false);
    const [small, setSmall] = useState(false);
    const [tiny, setTiny] = useState(false);
    const [closable, setClosable] = useState(false);
    const [icon, setIcon] = useState(false);
    const [lifted, setLifted] = useState(false);
    const [color, setColor] = useState(colors[0]);
    const [borderType, setBorderType] = useState(borders[0]);

    return (
        <ThemeContext.Consumer>
            {theme => (
                <Page
                    usage={usage}
                    backTopBtn
                    apiDescItems={items}
                    componentName="<Tag/>">
                    <Switch 
                        color="primary" 
                        check={outlined}
                        rightLabel="Outlined" 
                        className="my-10"
                        onChange={() => setOutlined(!outlined)}/>
                    <br/>
                    <Switch 
                        color="primary" 
                        check={small}
                        rightLabel="Small" 
                        className="my-10"
                        onChange={() => {
                            setSmall(!small)
                            if (!small) setTiny(false)
                        }}/>
                    <Switch 
                        color="primary" 
                        check={tiny}
                        rightLabel="Tiny" 
                        className="my-10 ml-10"
                        onChange={() => {
                            setTiny(!tiny)
                            if (!tiny) setSmall(false)
                        }}/>
                    <br/>
                    <Switch 
                        color="primary" 
                        check={closable}
                        rightLabel="Closable" 
                        className="my-10"
                        onChange={() => setClosable(!closable)}/>
                    <br/>
                    <Switch 
                        color="primary" 
                        check={lifted}
                        rightLabel="Lifted" 
                        className="my-10"
                        onChange={() => setLifted(!lifted)}/>
                    <br/>
                    <Select
                        items={colors}
                        prefix={<Icon name="brush"/>}
                        width={200}
                        dark={theme}
                        label="Color"
                        color="primary"
                        value={color}
                        className="mr-10"
                        onChange={v => setColor(v)}/>
                    <br/>
                    <br/>
                    <Select
                        items={borders}
                        dark={theme}
                        prefix={<Icon name="shape"/>}
                        width={200}
                        label="Border type"
                        color="primary"
                        value={borderType}
                        onChange={v => setBorderType(v)}/>
                    <Divider/>
                    <div className="row align-center">
                        <Tag 
                            outlined={outlined} 
                            color={color}
                            small={!tiny && small}
                            tiny={!small && tiny}
                            borderType={borderType}
                            closable={closable}
                            lifted={lifted}
                            visible={visible}
                            onClose={() => setVisible(false)}>
                            Price: 1000
                        </Tag>
                        {closable && <Button 
                            name="Return Tag" 
                            color="info" 
                            className="ml-20" 
                            onClick={() => setVisible(true)}/>}
                    </div>
                </Page>
            )}
        </ThemeContext.Consumer>
    )
}

export default TagPage;
