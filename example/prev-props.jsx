function Counter() {
    const [count, setCount] = useState(0);
    const [updater, setUpdater] = useState(0);

    function forceUpdate() {
        setUpdater(updater => updater+1);
    }
    const prevCountRef = useRef();

    useEffect(() => {
        prevCountRef.current = count;
    })

    const prevCount = prevCountRef.current;
    return <h1>Now: {count}, before: {prevCount}</h1>;

}