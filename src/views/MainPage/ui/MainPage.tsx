import Link from 'next/link';
import React, { memo } from 'react';
import { useTranslation } from 'next-i18next';

import cls from './MainPage.module.scss';



const MainPage = (props: any) => {
    const { t } = useTranslation();
    return (
        <div className={cls.MainPage}>
            <Link className={cls.Link} href={'/about'}>
                {t('main:AboutPage')}
            </Link>
        </div>
    );
};

export default memo(MainPage)