import { List } from '../../components/List/List';
import { useSelector } from 'react-redux';

export const ExpenseList = (props) => {
    const expenseList = useSelector((store) => store.EXPENSE.expenseList);
    return <>
        <List 
            items={expenseList} 
        />
    </>
};