const Square = ({ colorValue, hexColor, isDark }) => {
    return (
        <section 
        className="square" 
        style={{backgroundColor:colorValue, color:isDark ? "#000" : "#fff" }}>

            <p>{colorValue ? colorValue : 'empty'}</p>
            <p>{hexColor?hexColor:null}</p>
        </section>
    );
};

export default Square;