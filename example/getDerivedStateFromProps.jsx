class Counter extends Component {
    state = {
        overflow: false,
    }
    static getDerivedStateFromProps(props, state) {
        if(props.count>10) {
            return {
                overflow: true
            }
        }
    }
}

function Counter(props) {
    const [overflow, setOverflow] = useState(false);

    if(props.count>10) {
        setOverflow(true);
    }
}
