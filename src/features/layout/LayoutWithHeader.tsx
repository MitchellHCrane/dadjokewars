import React from 'react';
import Header from '../header/Header'

type MyComponentProps = React.PropsWithChildren<{}>;

function LayoutWithHeader({ children }: MyComponentProps) {
    return(
        <>
            <div>
                <Header/>
            </div>
            <main className="desktopMaxWidth">{children}</main>
        </>
    )
}

export default LayoutWithHeader;