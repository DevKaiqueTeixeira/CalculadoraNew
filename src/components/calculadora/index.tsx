"use client"
import { stringify } from 'querystring';
import { useState } from 'react'
export function Calculadora() {

    const [inputCalc, setInputCalc] = useState('');
    const operadores = ["+", "-", "*", "/", "."];
    const [verifyCalc, setVerifyCalc] = useState(false);

    const [n1, setN1] = useState('');

    function Calc(numero: number) {
        alert(verifyCalc)

        const numeroInput = Number(inputCalc)
        if (numeroInput < 0) {
            setInputCalc("");

        }

        if (verifyCalc === true && !inputCalc.includes("+") && !inputCalc.includes("-") && !inputCalc.includes("/") && !inputCalc.includes("*")) {
            setInputCalc("");
            setVerifyCalc(false)
        }



        setInputCalc(prev => prev + numero);

    }

    function addValor(operator: string) {

        setInputCalc(prev => {

            const jaTemOperador = operadores.some(op => prev.includes(op));
            const ultimo = prev.slice(-1);
            const numberInput = Number(inputCalc);

            if (!prev && operadores.includes(operator)) {

                return prev;
            }

            if (operadores.includes(ultimo) && operadores.includes(operator)) {
                return prev;
            } if (jaTemOperador && operadores.includes(operator)) {
                return prev;
            }

            return prev + operator;



        });
    }

    function clearCamp() {
        setInputCalc("");
    }

    function resultCalcSoma() {

        if (inputCalc.includes("+")) {
            const result = inputCalc.split("+")
            const n1 = Number(result[0]);
            const n2 = Number(result[1]);

            const resultadoSoma = n1 + n2;

            const resultado = String(resultadoSoma)

            setInputCalc(resultado);
            setVerifyCalc(true);

        } else if (inputCalc.includes("-")) {
            const result = inputCalc.split("-")
            const n1 = Number(result[0]);
            const n2 = Number(result[1]);

            const resultadoSoma = n1 - n2;

            const resultado = String(resultadoSoma)
            setInputCalc(resultado);
            setVerifyCalc(true);
        } else if (inputCalc.includes("/")) {
            const result = inputCalc.split("/")
            const n1 = Number(result[0]);
            const n2 = Number(result[1]);

            const resultadoSoma = n1 / n2;

            const resultado = String(resultadoSoma)
            setInputCalc(resultado);
            setVerifyCalc(true);
        } else if (inputCalc.includes("*")) {
            const result = inputCalc.split("*")
            const n1 = Number(result[0]);
            const n2 = Number(result[1]);

            const resultadoSoma = n1 * n2;

            const resultado = String(resultadoSoma)
            setInputCalc(resultado);
            setVerifyCalc(true);
        }
    }





    return (
        <main className="flex items-center justify-center">
            <div className="mt-50 w-64 flex flex-col gap-3">

                <div className="flex gap-2 items-center">
                    <button onClick={() => clearCamp()} className="p-3 bg-red-400 text-white font-bold rounded">A/C </button>
                    <input
                        value={inputCalc}
                        onChange={(e) => setInputCalc(e.target.value)}
                        type="text"
                        className="w-full p-3 border rounded text-right text-2xl"
                        placeholder="0"
                    />
                </div>

                <div className="grid grid-cols-4 gap-2">
                    <button onClick={() => Calc(7)} className="p-4 bg-gray-200">7</button>
                    <button onClick={() => Calc(8)} className="p-4 bg-gray-200">8</button>
                    <button onClick={() => Calc(9)} className="p-4 bg-gray-200">9</button>
                    <button onClick={() => addValor("/")} className="p-4 bg-orange-400">/</button>

                    <button onClick={() => Calc(4)} className="p-4 bg-gray-200">4</button>
                    <button onClick={() => Calc(5)} className="p-4 bg-gray-200">5</button>
                    <button onClick={() => Calc(6)} className="p-4 bg-gray-200">6</button>
                    <button onClick={() => addValor("*")} className="p-4 bg-orange-400">*</button>

                    <button onClick={() => Calc(1)} className="p-4 bg-gray-200">1</button>
                    <button onClick={() => Calc(2)} className="p-4 bg-gray-200">2</button>
                    <button onClick={() => Calc(3)} className="p-4 bg-gray-200">3</button>
                    <button onClick={() => addValor("-")} className="p-4 bg-orange-400">-</button>

                    <button onClick={() => Calc(0)} className="p-4 bg-gray-200">0</button>
                    <button onClick={() => addValor(".")} className="p-4 bg-gray-200">.</button>
                    <button onClick={() => resultCalcSoma()} className="p-4 bg-green-400">=</button>
                    <button onClick={() => addValor("+")} className="p-4 bg-orange-400">+</button>
                </div>

            </div>
        </main>
    );
}
