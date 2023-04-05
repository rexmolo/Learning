
import ItemList from './ItemList';
const Content = ({items, handelCheck, handelDelete}) => {
    return ( 
        <main>
            <ItemList 
                items={items}
                handelCheck={handelCheck}
                handelDelete={handelDelete}
            />
        </main>
     );
}
 
export default Content;