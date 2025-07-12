import React from 'react';

export default function Header() {
    type Menu = {
        label: string
    }
    const menu: Menu[] = [
        { label: "ホーム" },
        { label: "メッセージ" },
        { label: "概要" }
    ]
    return (
        <div>
            <header>
                <h1>ちょんまげ</h1>
                <ul>
                    {menu.map((item) => (<li key={item.label}>{item.label}</li>))}
                </ul>
            </header>
        </div>
    );
};
