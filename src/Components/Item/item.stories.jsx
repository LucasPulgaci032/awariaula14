import ListItem from "./Item";

export default {
  title: "Components/ListItem",
  component: ListItem,
};

const Template = (args) => <ListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  item: {
    id: 1,
    name: "Pikachu",
    sprites: {
      other: {
        "official-artwork": {
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
        }
      }
    }
  }
};
