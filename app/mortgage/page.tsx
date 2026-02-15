"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MortgagePage() {
    const [purchasePrice, setPurchasePrice] = useState(500000);
    const [downPayment, setDownPayment] = useState(100000); // 20%
    const [interestRate, setInterestRate] = useState(6.5);
    const [loanTerm, setLoanTerm] = useState(30);
    const [monthlyPayment, setMonthlyPayment] = useState(0);

    useEffect(() => {
        const principal = purchasePrice - downPayment;
        const monthlyInterest = interestRate / 100 / 12;
        const numberOfPayments = loanTerm * 12;

        if (principal > 0 && interestRate > 0) {
            const payment =
                (principal *
                    monthlyInterest *
                    Math.pow(1 + monthlyInterest, numberOfPayments)) /
                (Math.pow(1 + monthlyInterest, numberOfPayments) - 1);
            setMonthlyPayment(payment);
        } else if (interestRate === 0) {
            setMonthlyPayment(principal / numberOfPayments);
        }
    }, [purchasePrice, downPayment, interestRate, loanTerm]);

    return (
        <main className="bg-white min-h-screen">
            <Header />

            <section className="pt-32 pb-16 px-4 bg-primary text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold font-raleway mb-6">
                        Mortgage Calculator
                    </h1>
                    <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                        Estimate your monthly payments and see how interest rates affect your
                        loan.
                    </p>
                </div>
            </section>

            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                    {/* ── Inputs ────────────────────────────────── */}
                    <div className="p-8 md:p-12 space-y-8 bg-gray-50">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                Purchase Price
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg">
                                    $
                                </span>
                                <input
                                    type="number"
                                    value={purchasePrice}
                                    onChange={(e) => setPurchasePrice(Number(e.target.value))}
                                    className="w-full pl-10 pr-4 py-4 bg-white border border-gray-200 rounded-xl text-xl font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20"
                                />
                            </div>
                            <input
                                type="range"
                                min="100000"
                                max="5000000"
                                step="5000"
                                value={purchasePrice}
                                onChange={(e) => setPurchasePrice(Number(e.target.value))}
                                className="w-full mt-4 accent-primary h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                Down Payment ({((downPayment / purchasePrice) * 100).toFixed(1)}
                                %)
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg">
                                    $
                                </span>
                                <input
                                    type="number"
                                    value={downPayment}
                                    onChange={(e) => setDownPayment(Number(e.target.value))}
                                    className="w-full pl-10 pr-4 py-4 bg-white border border-gray-200 rounded-xl text-xl font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20"
                                />
                            </div>
                            <input
                                type="range"
                                min="0"
                                max={purchasePrice}
                                step="1000"
                                value={downPayment}
                                onChange={(e) => setDownPayment(Number(e.target.value))}
                                className="w-full mt-4 accent-primary h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">
                                    Interest Rate (%)
                                </label>
                                <div className="relative">
                                    <input
                                        type="number"
                                        step="0.1"
                                        value={interestRate}
                                        onChange={(e) => setInterestRate(Number(e.target.value))}
                                        className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl text-xl font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">
                                    Loan Term (Years)
                                </label>
                                <div className="relative">
                                    <select
                                        value={loanTerm}
                                        onChange={(e) => setLoanTerm(Number(e.target.value))}
                                        className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl text-xl font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none"
                                    >
                                        <option value="10">10 Years</option>
                                        <option value="15">15 Years</option>
                                        <option value="20">20 Years</option>
                                        <option value="30">30 Years</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── Results ───────────────────────────────── */}
                    <div className="p-8 md:p-12 flex flex-col justify-center bg-white space-y-8">
                        <div className="text-center">
                            <p className="text-gray-500 font-semibold uppercase tracking-wider mb-2">
                                Estimated Monthly Payment
                            </p>
                            <div className="text-6xl md:text-7xl font-extrabold text-primary mb-2">
                                ${monthlyPayment.toFixed(0).toLocaleString()}
                            </div>
                            <p className="text-sm text-gray-400">
                                Principal & Interest only. Taxes and insurance not included.
                            </p>
                        </div>

                        <div className="space-y-4 pt-8 border-t border-gray-100">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-600">Loan Amount</span>
                                <span className="font-bold text-gray-900">
                                    ${(purchasePrice - downPayment).toLocaleString()}
                                </span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-600">Total Interest Paid</span>
                                <span className="font-bold text-gray-900">
                                    ${(
                                        monthlyPayment * loanTerm * 12 -
                                        (purchasePrice - downPayment)
                                    )
                                        .toFixed(0)
                                        .toLocaleString()}
                                </span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-600">Total Cost of Loan</span>
                                <span className="font-bold text-gray-900">
                                    ${(monthlyPayment * loanTerm * 12).toFixed(0).toLocaleString()}
                                </span>
                            </div>
                        </div>

                        <div className="pt-8">
                            <button className="w-full bg-gold hover:bg-gold-light text-primary-dark font-bold py-4 rounded-xl transition-all shadow-lg shadow-gold/20 transform hover:-translate-y-1">
                                Get Pre-Approved Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FAQ ─────────────────────────────────────── */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-center font-raleway mb-12">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                        {[
                            {
                                q: "What credit score do I need?",
                                a: "A score of 620 is typically the minimum for conventional loans, but 740+ gets you the best rates.",
                            },
                            {
                                q: "How much down payment is required?",
                                a: "Traditionally 20% is ideal to avoid PMI, but FHA loans allow as little as 3.5% down.",
                            },
                            {
                                q: "What is pre-approval?",
                                a: "Pre-approval is a lender's commitment to loan you a specific amount, showing sellers you are a serious buyer.",
                            },
                        ].map((faq, i) => (
                            <div
                                key={i}
                                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                            >
                                <h3 className="font-bold text-lg text-gray-900 mb-2">
                                    {faq.q}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {faq.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
