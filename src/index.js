import { DireflowComponent } from 'direflow-component';
import Layout from './Layout';
import Grid from './Grid';
import Box from './Box';
import Button from './Button';
import Input from './Input';
import Slider from './Slider';
import Drawer from './Drawer';
import Menu from './Menu';
import TabMenu from './TabMenu';
import Card from './Card';
import Progress from './Progress';

const layoutComponent = new DireflowComponent();
layoutComponent.render(Layout, 'future-layout');

const gridComponent = new DireflowComponent();
gridComponent.render(Grid, 'future-grid');

const boxComponent = new DireflowComponent();
boxComponent.render(Box, 'future-box');

const buttonComponent = new DireflowComponent();
buttonComponent.render(Button, 'future-button');

const inputComponent = new DireflowComponent();
inputComponent.render(Input, 'future-input');

const sliderComponent = new DireflowComponent();
sliderComponent.render(Slider, 'future-slider');

const drawerComponent = new DireflowComponent();
drawerComponent.render(Drawer, 'future-drawer');

const menuComponent = new DireflowComponent();
menuComponent.render(Menu, 'future-menu');

const tabMenuComponent = new DireflowComponent();
tabMenuComponent.render(TabMenu, 'future-tabMenu');

const cardComponent = new DireflowComponent();
cardComponent.render(Card, 'future-card');

const progressComponent = new DireflowComponent();
progressComponent.render(Progress, 'future-progress');
