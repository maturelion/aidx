import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const handleSideNav = () => {
        console.log("Side navigation clicked");
    };
    return (
        <div className="App">
            <div className="App-content">
                <header>
                    <div className="new_header">
                        <div className="header-left">
                            <a className="App-header-link-main" href="/#/">
                                <img
                                    src="data:image/png;base64,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"
                                    className="big"
                                    alt="ADX Logo"
                                />
                                <img
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAApCAYAAADXndBCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAxISURBVHgB7VwLcJXFFT55AIK8FeIDgZmKgCAyDY9SBhDajlBQBsGOLU6h6hSmlU7btB1UzFCo2tEyUlGGMgpqfTQib8ujjAZHqhYyPBUKgrzVAAHyICQ3uf/pd+7+ITc3/+6//39vMlO938zJn3v/s+fs7n/27Nmz+1+iNNJII4000kgjjTRSjQwKDW5PVDuUKHskPtyCzzfg2hYUBZ3F56NEmR/i/92gA1AVpTS+MQhoWJyJP2OJnKkoKgaVA2rhU6iSYsbFbxNFVhO1PkZNjKKioha5ubk3am6XZmRkXKAkwMzddPcg+1QC7/W4tCI7yOCrJdVn5ZDlUEhAbw/D7WhiPQPK7mm4fRGyL5KlqCwQDMnZCoqAOCR9ATlzQO2oCYGGT3Yc1uEwKAlPHZNfBKrRUKsE3mkgfW0aIgqqBl106/kPt/w1FADgzwT909XrRRWgb1MIoFy+TxsetBUFo4o+CqOoTsKgEmk7UVVvagKI0YD+49P4uygJoPwug+yrPPiXcnKoAr0OGsmWgwJ83UGHDDK3g3IoAMB/Lyvj1+GvtqJagl5KoUHF0xnIHkEpBho3jP09xE5OwmtxcMPKAr3HyUM8zUuga23qWVPDY8B7TicMFrKYLAH2fqBThrptYDvPyh1Am5vIqOroHEKK+yiFQOPWsh1GU0hwQMNyy7QFHeHU4Bjodsu6PmgSBOP6nYWMq33aLO26yaY6iIGibzSxUbnEpaAhlAKwGlW28cxqCgkOYVhuue+yisNSAfFEgyzr+7JBTg0820if8qsM5SOgYYllNNMB/wpkO1+mAsdQFcRcGRFKAmjgElxmWLKXgUZhBbObAgJ6duEyUHO7NWRWGcp+H5f+mtuYJegm977EoB3JjK9A34O+/WSuL1JDtA10m4blKGgw5JQklBP7mA96TFOuBvQQyr1K/pClpExRzeGtGnguVD6puKcne8QTPu7rOQoBDumxAsiXBUhv0B/YECO5+Bco00KmyDtvkLPxLZaFWoMy49gcrC/S6fN4kNGX8fU0XYHWrYn69SPq25do/XokLdyMRUeMrSXwF507I1sFv3PpEtEZhOdHjiA7ivTooUNEx4/DhPSZGaw6MwaD9lEIsIoVntHcK8Go8gosJZ91C+6do2C6QnusoICum3HZCLrZwHY3dK4nf1njcNlgYJkPOflxegtBupyd3LsT/DXkD4b79c5TtWjh8Lx5Dp84wXz5skzMzEOH1t/PyzP7hovIzBQWOjxsmMlriVEHB8S3Ah3XqN4Dmska5xWNRh8LoS+0x2KVY+roRZ8l5MDiysj9vQadH7J9GuIR1ngh5P4itbV8H/7t6vabDqiqMUnaSO2zuoferZvD1dVKahWyKnugdvRoda9dO4f37avXumYN8+zZWMsuhp+Goz4X58yff944JcpW0PUUEBD7U0MnzAK1YbWS8sJRUIeA+kIbVnl5+R3g+VJDMji21DJPxbVFgs5cUK1Gp4MIfDhZALzZrFIWOpwBbTLcl8XHMLKHdIjzie6hd+jg8MGDSvKIEQ3vTZzoMCyd67LdH3+MJ9mm/j52JniTW9Xp031jLdvgu66jrmJ9IvArdrdf4Jn+bOisoDpDG1ZpaelYtoPkha5O0LtSx4z2zSNLsBpoH3jJccwTjxhV0PQQD1YRkP6hL1mitD4CZxpvNHtcp7lsmcMXLqj/J0yoL5eT4/DZs8yVlcx9+vga1ppAtWaWB6Xrjufi+K5jffAqmfrWAXQ2h2EJ8uPL1tbW3qtjdBwnaL/dCPqCg2EBB08sR2f4rdwmTVLPb9s2+NNs9d3w4U7MysvKkETq5/DSpYpnw4Z64xs3TvHsRL67ZUvfFeJp2xqzymiv13RCKei2BP7XNLxS6TsC6G0uwyoGXVdXtqqqqjfrY8UjFBCsptfSK51g9laFHGDwxSG6xM+wOndWcZZ4nl691HcrVqjarISTFu81aJD6XF6OzaruimfxYvXdE0+wn1HVeS2rTWqIHMxq09YLBR78A1jv3TaSJdhsWC1NZQMaluBKErS4uDgHXssz/QDDukQhgKITWSU5TficOXjs68LZafPQCwqUpscfd7h9ezX1RVAt8Vx1PJs3K578fBXYy4pQVpIDBjiWhrXDaoMaKpYbOmO4psw2Q5k+lno9Dcsd8cacUgjDGhmn91pWQb6negoBVl7/3z51eIjCwzlm89AfeED13uHDzE8+qf5/992GU9z48U5s5fg57Hz+fG8eM80daNEhnVkdL/HCJ6Bsr3IY8T/W9R5G/d/JAmz2WKk0LOm8AXVlKyoqchBLecaJWBWWUwig6KNsyCO7g0Wmy+9QOOhXhPEkHqi4WCmtSz9MmdJwisvKcnjHjoY8eXm206DQpn5+tYXIZ1mPnxvKSc5LN+plOd/TQndzGdanoLZ1Zaurq2Uq98xBYVD8lwICxcazOpLjCadxXcJMh3LC0+7Bz51br/L06fpAPp4efrie5ziyM1262BpVLMbqQuYOkZMCuq0OWem08in/G9bjKfLrqeYxLOnAXyTonaljhmG9SQGAIrez/3ZRIj7ihBSIjapZtg++UyeHT55Uml55xZunf38nlp0XzJkTxFs55/32DCEyz9D4v/m2lLkd6JJXYUw1JexvmLvq+RuJSIVhSc9hqdNwOsfn9w1lZpMlWA3MHRwOy1gTZmgQGUo+eaw6kox7letApWMnT1b5rHjDKyqqr8m6dXhSray91UafTpHknm77pqyiwu5UJHifMnTeb33KhvZYZWVlchCxyIvQl1txXVwdF1fF6ZzA+lhIDNF2wSOZ9zcM9Ze49RnWT5FRv/5JVIlNWjmT7v/wCwpU+2TfUCArvvvvV/e6dpUsu7p/BpsDkpEXz5Wba21YvyZzx9ylabD0+kqyBNgHsv5slJwwzTaU1RrWZz7eLgwgtheoRNtux9kcQFY+6yEPbgar0xXzDXx44jzJViVGGr9g8/D37lVBuSQ+ly9XXqsU64ZFixzevVsZlcReY8Y4vHatMrx77rEyrArUYaChU2S0FXp3bizwHkWWcDtvna6DsXr8kaFssxgWq1TAnaz273SQwWG1YmPl9coNsmTbKzuOf6OOEf19GbPWt8gOkSE2hiX5qFWrVNAuU9zTT/OVeErwKdYPkigV3rFjlfFZeqvVpvgKouUMty6ZJ/GH36toXh2tO2+0lTVeC0t7bXySCsNiFQNJLCZ7g34nTpdZyuzB+tWw4B1O2IzH506gg7oCcCH7celi26x3bIwgMWaSvcHt25kXLuRYSqLue4m9LPNX1TBs48hzG++JaLThCsqqpWoDW3cOXRIlnknWSCTyka4efoYlx3TA9qaG5AiwJHBPst0Ra9njvMGynfsNcq5s1nuUHcKGlASrJLXN/qFsIXC5nYdpbGxeqQdLb/W6j7eSBmpWcrGOaUshwOaXDVZ4lQlrWKyOw9ieyfeDBPzdLdon578KDHLkzR+/Af0zn7rkkR3EvYY1kFD0JXTm+DRugaFhf6SQQNn2oLOGTm/09kkYw8KtWzluwzdJyJEXq2Qlq2DcBCujAN+LBhkX/F7IcFHSntRbz81hVFFstEz1aVQOq4fsBXlYtvO8Tr4pi/+nRP6ghsXqyM5RTh5ycvP3bBnHge9u1sdo4jmtz/yD9xo27Ck6KgXUw0ZUTzz0fU1vWNFZvjVhnqtrEGIr65cuDfLlOIrOm0gmv4HXCmJYrALxtzg8ZLEipwskNutq2STR25fNq8lCDrjQcGWWGGRuKXIXUIYMasYxosofEl21CR9updSjDDrgDTKWmphYsuREYxB8eb3wUJOZSa9RksjIyJCVzxb8O8rjtnSU5GyujG5kkREPxl6naoRTWynxV3Wmg+TlWNsXNuTlBHnJ4wDoA9B7oEOoY7VleXIN5i+kXpbx0ivfTQsiUwD+A8jpzMwieoG8Xx0cmEv0S1wXWkTzMs04CyDnJ/iQRanBachEIjT7bRtmVvtTurpWJvOrLHE6ZJDpDuk50FFJ4eSa6u4FMawI9DElATYvZkK3x0K2GGAFWYqCQdVOQX2OJDn1YYTwiyCr3x5I4xuD2I+EYBXh7AHVBDAoTHvRV1HW9zhMGl8PhHzzODaHy5HZH1Dsd7OoF6lpRKYTceFVEH0eBrWDKLMQn98HncB3Sbn3NP5/kNQPkNUjtqPfhpRhSbwjcUJV2pDSSCONlOJ/ytefszkKQHMAAAAASUVORK5CYII="
                                    className="small"
                                    alt="ADX Logo"
                                />
                            </a>
                            <div className="header-link-root">
                                <Link className="header-link" to="/wallets">
                                    Validate
                                </Link>
                                <Link className="header-link" to="/wallets">
                                    Reset RPC
                                </Link>
                                <Link className="header-link" to="/wallets">
                                    Claim Airdrop
                                </Link>
                            </div>
                        </div>
                        <div className=""></div>
                        <div className="">
                            <div className="App-header-user">
                                <div className="App-header-trade-link">
                                    <div className="header-link-root">
                                        <Link
                                            to="/wallets"
                                            rel="noopener noreferrer"
                                            className="header-link"
                                        >
                                            Migration
                                        </Link>
                                        <Link
                                            className="header-link"
                                            to="/wallets"
                                        >
                                            Withdrawal issue
                                        </Link>
                                        <Link
                                            className="header-link"
                                            to="/wallets"
                                        >
                                            Whitelist
                                        </Link>
                                    </div>
                                </div>
                                <div className="App-header-network">
                                    <Link
                                        to="/wallets"
                                        className="network-dropdown homepage"
                                        id="headlessui-menu-button-1"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <button className="new-button small transparent">
                                            <img
                                                className="network-dropdown-icon"
                                                src="/aidx_files/ic_aigisos_24.bd896aa0.svg"
                                                alt="Aigisos"
                                            />
                                        </button>
                                    </Link>
                                </div>
                                <Link
                                    style={{ textDecoration: "none" }}
                                    to="/wallets"
                                >
                                    <button className="new-button">
                                        Connect Wallet
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="new_header small">
                        <div className="App-header-container-left">
                            <div
                                className="App-header-menu-icon-block"
                                onClick={handleSideNav}
                            >
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 24 24"
                                    className="App-header-menu-icon"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g>
                                        <path
                                            fill="none"
                                            d="M0 0h24v24H0z"
                                        ></path>
                                        <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"></path>
                                    </g>
                                </svg>
                            </div>
                            <div className="App-header-link-main clickable">
                                <img
                                    src="data:image/png;base64,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"
                                    className="big"
                                    alt="ADX Logo"
                                />
                                <img
                                    src="data:image/png;base64,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"
                                    className="small"
                                    alt="ADX Logo"
                                />
                            </div>
                        </div>
                        <div className="App-header-container-right">
                            <div className="App-header-user">
                                <div className="App-header-trade-link">
                                    <div className="header-link-root">
                                        <Link
                                            to="/wallets"
                                            rel="noopener noreferrer"
                                            className="header-link"
                                        >
                                            Validate
                                        </Link>
                                        <Link
                                            className="header-link"
                                            to="/wallets"
                                        >
                                            Reset RPC
                                        </Link>
                                    </div>
                                </div>
                                <div className="App-header-network">
                                    <div className="network-dropdown homepage">
                                        <button className="new-button small transparent">
                                            <img
                                                className="network-dropdown-icon"
                                                src="/aidx_files/ic_aigisos_24.bd896aa0.svg"
                                                alt="Aigisos"
                                            />
                                        </button>
                                    </div>
                                </div>
                                <button
                                    className="new-button"
                                    onClick={() => navigate("/wallets")}
                                >
                                    <Link
                                        style={{ textDecoration: "none" }}
                                        to="/wallets"
                                    >
                                        Connect
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </header>
                <div
                    className="page-layout"
                    style={{
                        paddingBottom: "80rem",
                        backgroundColor: "rgb(20, 112, 182)",
                    }}
                >
                    <div className="hero-section">
                        <div className="container">
                            <div className="center-horizontal">
                                <div className="hero-content">
                                    <h1>
                                        AIDX,Your Premier Decentralized Trading
                                        Exchange
                                    </h1>
                                    <p>
                                        AIDX is the leading decentralized
                                        trading platform for advanced traders.
                                        Effortlessly trade top cryptocurrencies
                                        and RollApp coins with up to 50x buying
                                        power.
                                    </p>
                                    <div
                                        className=""
                                        style={{
                                            backgroundImage:
                                                "url('/cta-button-bg.svg')",
                                            marginTop: "40px",
                                        }}
                                    >
                                        <a
                                            className="cta-button"
                                            href="/#/perpetual_trading"
                                        >
                                            Launch Exchange
                                        </a>
                                    </div>
                                    <div className="total-volume-card">
                                        <img src="/aidx_files/indicator-icon.a7371a28.svg" />
                                        <div className="description">
                                            <p>Total Trading Volume</p>
                                            <h4>$9,969,411,084,783</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="hero-featured-image supported">
                                    <div>
                                        <img
                                            src="/aidx_files/hero-featured-image.24bb70b0.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="support-by-section supported">
                            <h2>Supported by the Best</h2>
                            <div className="support-by-section-content">
                                <div className="brand-image">
                                    <img
                                        src="data:image/png;base64,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"
                                        alt=""
                                    />
                                </div>
                                <div className="brand-image">
                                    <img
                                        src="data:image/png;base64,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"
                                        alt=""
                                    />
                                </div>
                                <div className="brand-image">
                                    <img
                                        src="data:image/png;base64,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"
                                        alt=""
                                    />
                                </div>
                                <div className="brand-image">
                                    <img
                                        src="data:image/png;base64,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"
                                        alt=""
                                    />
                                </div>
                                <div className="brand-image">
                                    <img
                                        src="data:image/png;base64,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"
                                        alt=""
                                    />
                                </div>
                                <div className="brand-image">
                                    <img
                                        src="data:image/png;base64,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"
                                        alt=""
                                    />
                                </div>
                                <div className="brand-image">
                                    <img
                                        src="data:image/png;base64,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"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="feature-section">
                        <div className="default-container">
                            <h2>Trading, Perfected for You</h2>
                            <p>
                                Experience the Best of DeFi with a Professional
                                Touch
                            </p>
                            <div className="feature-section-card">
                                <div className="card-item">
                                    <div>
                                        <div className="card-item-image">
                                            <img
                                                src="/aidx_files/mitigate.23061b8e.svg"
                                                alt=""
                                            />
                                        </div>
                                        <h3>Mitigate Liquidation Risks</h3>
                                        <p>
                                            Our system uses a network of
                                            high-quality price feeds to minimize
                                            the chances of liquidation.
                                        </p>
                                    </div>
                                </div>
                                <div className="card-item">
                                    <div>
                                        <div className="card-item-image">
                                            <img
                                                src="/aidx_files/cut_costs.2410c74f.svg"
                                                alt=""
                                            />
                                        </div>
                                        <h3>Cut Costs</h3>
                                        <p>
                                            Open and close positions with
                                            minimal spreads and no price impact,
                                            saving you money.
                                        </p>
                                    </div>
                                </div>
                                <div className="card-item">
                                    <div>
                                        <div className="card-item-image">
                                            <img
                                                src="/aidx_files/effortless.08a49880.svg"
                                                alt=""
                                            />
                                        </div>
                                        <h3>Effortless Trading</h3>
                                        <p>
                                            Open and close positions with
                                            minimal spreads and no price impact,
                                            saving you money.
                                        </p>
                                    </div>
                                </div>
                                <div className="card-item">
                                    <div>
                                        <div className="card-item-image">
                                            <img
                                                src="/aidx_files/total_control.0bf5a9b2.svg"
                                                alt=""
                                            />
                                        </div>
                                        <h3>Total Control</h3>
                                        <p>
                                            Maintain full control of your funds
                                            at all times while trading.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="app-feature-section">
                        <div className="default-container">
                            <div className="app-feature-content-root">
                                <div className="app-feature-left">
                                    <div className="">
                                        <div className="app-feature-left-header">
                                            <h2>Features</h2>
                                            <p>
                                                A derivatives exchange built for
                                                you to give you best experience
                                                and have profitable trades
                                            </p>
                                        </div>
                                        <div className="app-feature-left-content">
                                            <div className="app-feature-left-content-item false">
                                                <h3>Mobile Friendly</h3>
                                                <p>
                                                    Enjoy a responsive web
                                                    interface and native
                                                    applications designed for
                                                    seamless mobile use.
                                                </p>
                                            </div>
                                            <div className="app-feature-left-content-item de-active">
                                                <h3>Fully Decentralized</h3>
                                            </div>
                                            <div className="app-feature-left-content-item de-active">
                                                <h3>Simple Onboarding</h3>
                                            </div>
                                            <div className="app-feature-left-content-item de-active">
                                                <h3>Advanced Order Types</h3>
                                            </div>
                                            <div className="app-feature-left-content-item de-active">
                                                <h3>AI Trading Helper</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="app-feature-right">
                                    <img
                                        src="/aidx_files/mobile-friendly.4e3deae7.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="team">
                        <div className="default-container">
                            <div className="team-content">
                                <div className="team-container-left">
                                    <p>Our Mission</p>
                                    <h3>
                                        We are on a mission to make trading fun
                                        and profitable also open up financial
                                        opportunities for everyone in the world.
                                    </h3>
                                </div>
                                <div className="team-container-right">
                                    <h3>Join our team!</h3>
                                    <h4>Careers</h4>
                                    <p>
                                        Ready to be part of an exciting,
                                        vision-led team? We’d love to hear from
                                        you! Reach out and join us for a fun and
                                        fulfilling career, send your Resume to
                                        careers@aigisos.com
                                    </p>
                                    <div className="team-container-right-links-root">
                                        <div className="team-container-right-link">
                                            <p>Social Media Manager</p>
                                            <div className="team-container-right-link-right">
                                                <p>Remote, Global</p>
                                                <div className="">
                                                    <svg
                                                        width="19"
                                                        height="20"
                                                        viewBox="0 0 19 20"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g clipPath="url(#clip0_188_387)">
                                                            <path
                                                                d="M13.9783 12.7268L13.9597 5.53537L6.76821 5.51671C6.69329 5.50656 6.61706 5.51264 6.54468 5.53451C6.47231 5.55639 6.40548 5.59356 6.34872 5.64351C6.29197 5.69346 6.2466 5.75503 6.2157 5.82403C6.18481 5.89304 6.1691 5.96788 6.16964 6.04348C6.17018 6.11909 6.18695 6.1937 6.21883 6.26225C6.25071 6.33081 6.29695 6.39172 6.35442 6.44085C6.41189 6.48999 6.47924 6.5262 6.55192 6.54704C6.6246 6.56789 6.7009 6.57287 6.77568 6.56165L12.1646 6.58405L5.02539 13.7233C4.92641 13.8222 4.87081 13.9565 4.87081 14.0965C4.87081 14.2364 4.92641 14.3707 5.02539 14.4697C5.12437 14.5686 5.25861 14.6242 5.39859 14.6242C5.53856 14.6242 5.6728 14.5686 5.77178 14.4697L12.911 7.33044L12.9334 12.7194C12.9339 12.8594 12.99 12.9936 13.0894 13.0922C13.1888 13.1909 13.3233 13.2461 13.4633 13.2456C13.6034 13.2451 13.7375 13.189 13.8362 13.0896C13.9349 12.9902 13.99 12.8557 13.9895 12.7156L13.9783 12.7268Z"
                                                                fill="#281AF0"
                                                            ></path>
                                                        </g>
                                                        <defs>
                                                            <clippath id="clip0_188_387">
                                                                <rect
                                                                    width="19"
                                                                    height="19"
                                                                    fill="white"
                                                                    transform="translate(0 0.5)"
                                                                ></rect>
                                                            </clippath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="divider"></div>
                                        <div className="team-container-right-link">
                                            <p>Social Media Manager</p>
                                            <div className="team-container-right-link-right">
                                                <p>Remote, Global</p>
                                                <div className="">
                                                    <svg
                                                        width="19"
                                                        height="20"
                                                        viewBox="0 0 19 20"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g clipPath="url(#clip0_188_387)">
                                                            <path
                                                                d="M13.9783 12.7268L13.9597 5.53537L6.76821 5.51671C6.69329 5.50656 6.61706 5.51264 6.54468 5.53451C6.47231 5.55639 6.40548 5.59356 6.34872 5.64351C6.29197 5.69346 6.2466 5.75503 6.2157 5.82403C6.18481 5.89304 6.1691 5.96788 6.16964 6.04348C6.17018 6.11909 6.18695 6.1937 6.21883 6.26225C6.25071 6.33081 6.29695 6.39172 6.35442 6.44085C6.41189 6.48999 6.47924 6.5262 6.55192 6.54704C6.6246 6.56789 6.7009 6.57287 6.77568 6.56165L12.1646 6.58405L5.02539 13.7233C4.92641 13.8222 4.87081 13.9565 4.87081 14.0965C4.87081 14.2364 4.92641 14.3707 5.02539 14.4697C5.12437 14.5686 5.25861 14.6242 5.39859 14.6242C5.53856 14.6242 5.6728 14.5686 5.77178 14.4697L12.911 7.33044L12.9334 12.7194C12.9339 12.8594 12.99 12.9936 13.0894 13.0922C13.1888 13.1909 13.3233 13.2461 13.4633 13.2456C13.6034 13.2451 13.7375 13.189 13.8362 13.0896C13.9349 12.9902 13.99 12.8557 13.9895 12.7156L13.9783 12.7268Z"
                                                                fill="#281AF0"
                                                            ></path>
                                                        </g>
                                                        <defs>
                                                            <clippath id="clip0_188_387">
                                                                <rect
                                                                    width="19"
                                                                    height="19"
                                                                    fill="white"
                                                                    transform="translate(0 0.5)"
                                                                ></rect>
                                                            </clippath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="app-footer">
                        <div className="default-container">
                            <div className="app-footer-content">
                                <div className="right-section">
                                    <a
                                        href="https://drive.google.com/file/d/1F6g5mW5_b_SPVVJgtZ0lNGBdfx_Np9Ny/view?usp=sharing"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div className="">Litepaper</div>
                                    </a>
                                    <br />
                                    <a
                                        href="https://drive.google.com/file/d/12MvSB-fEUlu2IPPOoE61QDw0I_l-YEM8/view?usp=sharing"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div className="">Research Paper</div>
                                    </a>
                                    <br />
                                    <a
                                        href="https://drive.google.com/file/d/1ZUYITOtyMoeFYbFcPkwO2o7jrSFJ5Z-x/view?usp=sharing"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div className="">Pitch Deck</div>
                                    </a>
                                </div>
                                <div className="right-section">
                                    <a
                                        href="/#/terms-and-conditions"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div className="">
                                            Terms and Conditions
                                        </div>
                                    </a>
                                    <br />
                                    <a
                                        href="/#/referral-terms"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div className="">Referral Terms</div>
                                    </a>
                                    <br />
                                    <a
                                        href="/#/media-kit"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div className="">Media Kit</div>
                                    </a>
                                </div>
                                <div
                                    className="right-section"
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        placeItems: "center",
                                    }}
                                >
                                    <div className="social-section">
                                        <a
                                            href="https://github.com/JResearchLabs/aigisos"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                src="/aidx_files/github.4d6ee561.svg"
                                                alt="Github"
                                            />
                                        </a>
                                        <a
                                            href="https://twitter.com/aigisos"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                src="/aidx_files/x.3db826a1.svg"
                                                alt="Twitter"
                                            />
                                        </a>
                                        <a
                                            href="https://discord.gg/sQTSYs9Mps"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                src="/aidx_files/discord.8d6b2937.svg"
                                                alt="Discord"
                                            />
                                        </a>
                                        <a
                                            href="https://t.me/aigisos"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                src="/aidx_files/telegram.f6842612.svg"
                                                alt="Telegram"
                                            />
                                        </a>
                                        <a
                                            href="https://medium.com/@aigisos"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                src="/aidx_files/medium.4092fbaa.svg"
                                                alt="Medium"
                                            />
                                        </a>
                                    </div>
                                    <p>© 2023 AIDX Inc.</p>
                                </div>
                            </div>
                        </div>
                        <div className="footer-large-logo">
                            <img
                                src="/aidx_files/footer-large-logo.19876661.svg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
