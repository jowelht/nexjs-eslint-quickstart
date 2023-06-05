import Logo from "@/compoents/logo";
const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="grid">
                    <div className="column-xs-12 column-md-6">
                        <div className="header__logo">
                            <Logo />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
