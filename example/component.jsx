function App() {
    useEffect(() => {
        // componentDidMount
        return () => {
            // componentWillUnmount
        }
    }, []);

    let renderCounter = useRef(0);

    useEffect(() => {
        if(renderCounter > 1) {
            // componentDidUpdate
        }
    })

}