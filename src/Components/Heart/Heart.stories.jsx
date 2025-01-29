import Heart from './Heart';

export default {
    title: 'Components/Heart',
    component: Heart,
    parameters: {
        docs:  {
            description: {
                component: 'Olá mundo'
            },
        },
    },
    argTypes: {
        onClick: {
            action: 'onClick'
        },
        selected: {
            control: 'boolean',
            defaultValue: false
        },
        testId: {
            control: 'text',
            defaultValue: 'heart-1'
        }
    }
}
const style = {
    width: '50px',
    display: 'flex'
}

const Template = (args) => (
  <div className='heart-storybook-wrapper' style={style}>
    <Heart {...args} />
  </div>
);

export const Default = Template.bind({});
