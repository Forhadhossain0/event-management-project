import { useRouteError } from "react-router-dom";


const Errorpage = () => {

    const error = useRouteError('')

    return (
        <div className="translate-y-60">
            <h1 className="text-center mx-auto py-6 text-3xl font-semibold">!!Oops Sorry this page is not available .  .  .</h1>
            <i className="text-center mx-auto  text-3xl font-semibold text-rose-600">{error.status || error.statusText} !!</i>
        </div>
    );
};

export default Errorpage;