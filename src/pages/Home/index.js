import { useTranslate } from 'react-translate';
/**
 * @param {Object} props - properties
 * @param {String} props.name - name
 */

function Home({ name }) {
  const t = useTranslate('home');

  return <div>{t(name)}</div>;
}

export default Home;
