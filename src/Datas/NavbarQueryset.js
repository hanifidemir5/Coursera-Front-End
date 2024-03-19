export var navDatas = [
    {
        id : 1,
        flex: 2,
        text : 'React-Basics & React-Advanced Courses',
        link : '/routes',
        subRoutes: [
            {
                title : "Routes",
                to: "/routes",
                about: "Shows all the routes that this project contains with the detailed explanation about the route. You are currently in this route.",
            },
            {
                title : "Image",
                to: "/image",
                about: "Displays an image.",
            },
            {
                title : "Conditional Rendering",
                to: "/conditionalrendering",
                about: "Displays a page that can be interacted with. The page shows rendered content based on the interaction.",
            },
            {
                title : "Audio",
                to: "/audio",
                about: "Shows two button. Each button is carrying a link to provided birds audio recordings. Upon cliking one of each button you can hear the beautiful voice of the bird.",
            },
            {
                title : "Map",
                to: "/map",
                about: "Shows mapped datas from various data API's.",
            },
            {
                title : "Keys",
                to: "/keys",
                about: "Shows list of items that you can reverse the arrengement using provided button.",
            },
            {
                title : "Forms",
                to: "/forms",
                about: "Shows different forms that used different technologies to construct.",
            },
            {
                title : "Mouse Tracker",
                to: "/mouseTracker",
                about: "Shows a panel which tracks mouse coordinates. Constructed using useState, useEffect hooks provided with React and addEventListener,removeEventListener functions provided by JavaScript.",
            },
            {
                title : "Mouse Tracker With Render",
                to: "/mouseTrackerWithRender",
                about: "The same panel but with the provided above but using render() function.",
            },
            {
                title : "State",
                to: "/state",
                about: "Shows a page that you can greet the world or construct a goal list. ",
            },
            {
                title : "Login Component",
                to: "/loginComponent",
                about: "Shows a page that you can choose between one of three login choices.",
            },
            {
                title : "Radio Group",
                to: "/RadioGroup",
                about: "Radio group panel to simulate a feedback radio group.",
            },
            {
                title : "Gift",
                to: "/gift",
                about: "Shows a coupon page that you can use and earn again with provided buttons.",
            },
            {
                title : "Fetch",
                to: "/fetch",
                about: "Fetching some data",
            },
            {
                title : "Live Orders",
                to: "/liveOrders",
                about: "dummy",
            },
            {
                title : "Data Fetcher",
                to: "/dataFetcher",
                about: "Fetches menu elements based on category",
            },
            {
                title : "Component Composition",
                to: "/componentComposition",
                about: "Displayes a custom pop-up.",
            },
            {
                title : "Custom Hook",
                to: "/customHook",
                about: "Displays two component one is count and one is changing displayed dates. Two component constructed with custom hooks.",
            },
            {
                title : "Use Reducer",
                to: "/useReducer",
                about: "dummy",
            },
            {
                title : "Context",
                to: "/context",
                about: "dummy",
            },
            {
                title : "Calculator",
                to: "/calculator",
                about: "Displays a custom made calculator.",
            },

        ]
    },
    {
        id : 2,
        flex: 1,
        text : 'About',
        link : '/image'
    },
    {
        id : 3,
        flex: 1,
        text : 'Contact',
        link : '/'
    },
]