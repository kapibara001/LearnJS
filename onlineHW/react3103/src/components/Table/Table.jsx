import { useState } from 'react'
import styles from './Table.module.css'

export function Table() {
    return (
        <table className={styles['table']}>
            <thead>
                <tr>
                    <td></td>
                    <td>Колонка 1</td>
                    <td>Колонка 2</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Пункт 1</td>
                    <td>Наличие 1</td>
                    <td>Наличие 2</td>
                </tr>
                <tr>
                    <td>Пункт 2</td>
                    <td>Наличие 1</td>
                    <td>Наличие 2</td>
                </tr>
                <tr>
                    <td>Пункт 3</td>
                    <td>Наличие 1</td>
                    <td>Наличие 2</td>
                </tr>
                <tr>
                    <td>Пункт 4</td>
                    <td>Наличие 1</td>
                    <td>Наличие 2</td>
                </tr>
            </tbody>
        </table>
    )
}