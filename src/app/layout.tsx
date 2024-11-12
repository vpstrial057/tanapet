import type {PropsWithChildren} from 'react';
import type {Metadata} from 'next';

import {Root} from '@/components/Root/Root';

import '@telegram-apps/telegram-ui/dist/styles.css';
import 'normalize.css/normalize.css';
import './_assets/globals.css';
import Navigation from "@/components/Navigation/Navigation";
import TopBar from "@/components/TopBar/TopBar";

export const metadata: Metadata = {
    title: 'Your Application Title Goes Here',
    description: 'Your application description goes here',
};

export default function RootLayout({children}: PropsWithChildren) {
    return (
        <html lang="en">
        <body>
        <Root>
            <div className="min-h-screen bg-gray-100 text-black flex flex-col items-center">
                <TopBar/>
                {children}
                <Navigation/>
            </div>
        </Root>
        </body>
        </html>
    );
}
