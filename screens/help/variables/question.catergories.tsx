import IQuestionCategory from "../../../interfaces/question.category";
import NotificationIcon from '../../../assets/icons/notification.svg';
import InvestIcon from '../../../assets/icons/invest.svg';
import FinanceIcon from '../../../assets/icons/finance.svg';

const questionCategories: IQuestionCategory[] = [
  {
    icon: <NotificationIcon />,
    category: 'Getting Started',
    bgColor: '#DFF1FF'
  },
  {
    icon: <InvestIcon />,
    category: 'How to Invest',
    bgColor: '#E8FFEB'
  },
  {
    icon: <FinanceIcon />,
    category: 'Payment Method',
    bgColor: '#FFECEF'
  }
];

export default questionCategories;