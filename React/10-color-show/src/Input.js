import colorNames from 'colornames';

const Input = ({ colorValue, setColor, setHexColor, isDark, setIsDark }) => {

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input 
            type="text"
            required
            value={colorValue}
            onChange={(e) => {
                setColor(e.target.value);
                setHexColor(colorNames(e.target.value));
            }}
            />
            <button type='button'
                onClick={() => {setIsDark(!isDark)}}
            >toggle text bg</button>
        </form>
    );

}

export default Input;