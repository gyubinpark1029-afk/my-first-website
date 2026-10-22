// 새 섹션을 만들면 여기에 한 줄만 추가하면 화면에 순서대로 나타난다
import SampleSection from './SampleSection.jsx';
import ButtonSection from './ButtonSection.jsx';
import InputSection from './InputSection.jsx';
import NavigationSection from './NavigationSection.jsx';
import DropdownSection from './DropdownSection.jsx';
import CheckboxSection from './CheckboxSection.jsx';
import RadioSection from './RadioSection.jsx';
import SliderSection from './SliderSection.jsx';
import ModalSection from './ModalSection.jsx';
import CardSection from './CardSection.jsx';
import DragDropSection from './DragDropSection.jsx';
import ScrollSection from './ScrollSection.jsx';
import AnimationSection from './AnimationSection.jsx';
import MenuSection from './MenuSection.jsx';
import SidebarSection from './SidebarSection.jsx';
import HoverSection from './HoverSection.jsx';
import SwipeSection from './SwipeSection.jsx';
import FlexNavigationSection from './FlexNavigationSection.jsx';

const sections = [
  { id: 'sample', Component: SampleSection },
  { id: 'button', Component: ButtonSection },
  { id: 'input', Component: InputSection },
  { id: 'navigation', Component: NavigationSection },
  { id: 'dropdown', Component: DropdownSection },
  { id: 'checkbox', Component: CheckboxSection },
  { id: 'radio', Component: RadioSection },
  { id: 'slider', Component: SliderSection },
  { id: 'modal', Component: ModalSection },
  { id: 'card', Component: CardSection },
  { id: 'drag-drop', Component: DragDropSection },
  { id: 'scroll', Component: ScrollSection },
  { id: 'animation', Component: AnimationSection },
  { id: 'menu', Component: MenuSection },
  { id: 'sidebar', Component: SidebarSection },
  { id: 'hover', Component: HoverSection },
  { id: 'swipe', Component: SwipeSection },
  { id: 'flex-navigation', Component: FlexNavigationSection },
];

export default sections;
