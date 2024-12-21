import React, { useState } from 'react';

import Header from '../../Components/Header';
import CustomNavTabs from '../../Components/Custom/CustomTab';

import { useQuery } from '../../Redux/apiServices/buildURL';

import { EXPENSE_PAGE_TAB_ITEMS, tabValueItem } from './constants';

const ExpensesPage = () => {
    const query = useQuery();
    const tabName = query.get('tab') || tabValueItem.SEE_EXPENSES;

    const [activeTab, setActiveTab] = useState(tabName);

    return (
        <div>
            <Header
                components={
                    <CustomNavTabs
                        tabItems={EXPENSE_PAGE_TAB_ITEMS}
                        selectedTab={activeTab}
                        onTabSelect={(tab: string) => setActiveTab(tab)}
                    />
                }
            />
            Expenses page
        </div>
    );
};

export default ExpensesPage;
