import { useTranslation } from 'react-i18next'

export const ErrorPage = () => {
  const {t } = useTranslation();
  return (
    <div id="error-page">
      <h1>{t('Упс')}</h1>
      <p>{t('К сожалению, произошла непредвиденная ошибка')}</p>
      <p>
        <i>{t('Старница об ошибке')}</i>
      </p>
    </div>
  );
}