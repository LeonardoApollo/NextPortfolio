import React from 'react'
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export const Navbar = () => {
    const { t } = useTranslation();
    const router = useRouter();
    const locale = router.locale === 'ru' ? 'en' : 'ru';

    const toggleLang = () => {
        router.push(`${router.pathname}`, `${router.pathname}`, {locale: locale})
    };
  return (
    <div>
        <button onClick={() => toggleLang()}>{t('common:Lang')}</button>
    </div>
  )
}