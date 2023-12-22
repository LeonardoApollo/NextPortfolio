import Link from 'next/link';
import React, { memo } from 'react';
import { useTranslation } from 'next-i18next';

import cls from './AboutPage.module.scss';

type Props = {};

const AboutPage = (props: Props) => {
    const { t } = useTranslation();
    return (
        <div className={cls.AboutPage}>
            <Link className={cls.Link} href={'/'}>{t('about:MainPage')}</Link>
        </div>
    );
};

export default memo(AboutPage);
