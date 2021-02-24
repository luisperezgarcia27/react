import { connect } from 'react-redux';
import { useTranslate } from 'react-translate';
/**
 * @param {Object} props - properties
 * @param {String} props.name - name
 * @param {Object} props.item - name
 */

function Home({ name, item }) {
  const t = useTranslate('home');
  return (
    <div>
      <div>{t(name)}</div>
      <div>{item.data}</div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  item: state.item,
});

export default connect(mapStateToProps)(Home);
