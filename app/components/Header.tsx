import React from 'react';

export default function Header() {


    type Menu = {
        home: string,
        message: string,
        overview: string
    }
    const menu: Menu = {
        home: "ホーム",
        message: "メッセージ",
        overview: "概要"
    }


    return (
        <div>
            <header>
                <h1>ちょんまげ</h1>
                <ul>

                    {Object.values(menu).map((label) => <li>{label}</li>)}
                </ul>
            </header>
        </div>
    );
};
