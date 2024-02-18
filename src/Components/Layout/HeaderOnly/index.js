import Header from "~/Components/Layout/components/Header";

function HeaderOnly({ children }) {
    return (
        <>
            <Header></Header>
            <div className="content">{children}</div>
        </>
    );
}

export default HeaderOnly;
