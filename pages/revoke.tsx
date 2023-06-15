import React from 'react'
import Navbar from '../components/Navbar'
import { Dropdown } from "@nextui-org/react";


const revoke = () => {
  return (
    <div>
        <Navbar/>
        <div className='container px-5 py-24 mx-auto'>

        <form className="max-w-xl items-center ">
            <div className="relative">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                />
            </div>
            
        </form>
<main className="max-w-7xl w-full mx-auto px-4 lg:px-8">
    <div className="flex flex-col gap-2 mb-2 border border-black dark:border-white rounded-lg px-4 pt-3">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <div className="flex flex-col gap-2 items-center sm:items-start">
                <div className="flex gap-1 items-center text-2xl font-bold leading-none"> </div>
            <div className="flex flex-col sm:flex-row items-center gap-2">
                <div className="flex items-center gap-1 text-sm text-zinc-500 dark:text-zinc-400">
                    <div className="flex gap-0.5 items-center leading-none">
                        <span><svg className="w-3 h-3 animate-spin-fast mx-1 loader" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></span><span className="font-bold">MATIC</span></div><div className="leading-none">•</div><div className="flex gap-1 items-center leading-none"><span>0x297001...7d19aC</span><button className="focus-visible:outline-none focus-visible:ring-black dark:focus-visible:ring-white focus-visible:ring-2 focus-visible:rounded justify-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"></path></svg></button></div></div><div className="text-xs font-semibold flex items-center justify-center py-0.5 px-1.5 rounded-md bg-transparent"> </div></div></div><div className="flex items-center gap-6"><div className="flex items-center gap-2"><a className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current focus-visible:rounded text-current visited:text-current underline hover:underline flex" href="https://opensea.io/0x2970016580aCe251cDC15de5B29d3F13f77d19aC" target="_blank" referrerPolicy="origin"><img alt="OpenSea Link" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className="aspect-square object-cover bg-white shrink-0 rounded-full" src="/assets/images/vendor/opensea.svg"/></a><a className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current focus-visible:rounded text-current visited:text-current underline hover:underline flex" href="https://mumbai.polygonscan.com/address/0x2970016580aCe251cDC15de5B29d3F13f77d19aC" target="_blank" referrerPolicy="origin"><img alt="Block Explorer Link" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className="aspect-square object-cover bg-white shrink-0 rounded-full dark:bg-black" src="/assets/images/vendor/etherscan.svg"/></a><button className="focus-visible:outline-none focus-visible:ring-black dark:focus-visible:ring-white focus-visible:ring-2 focus-visible:rounded flex items-center border border-black dark:border-white duration-150 cursor-pointer disabled:cursor-not-allowed leading-none font-medium shrink-0 text-black visited:text-black dark:text-white dark:visited:text-white disabled:text-zinc-600 dark:disabled:text-zinc-400 border-none justify-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5"><path fill-rule="evenodd" d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z" clip-rule="evenodd"></path></svg></button></div><style data-emotion="css b62m3t-container">.css-b62m3t-container</style><div className="shrink-0 css-b62m3t-container"><style data-emotion="css 7pg0cj-a11yText">.css-7pg0cj-a11yText</style><span id="react-select-chain-select-live-region" className="css-7pg0cj-a11yText"></span><span aria-live="polite" aria-atomic="false" aria-relevant="additions text" className="css-7pg0cj-a11yText"></span><style data-emotion="css 4rl0tx-control">.css-4rl0tx-control</style><div className="flex items-center box-border h-9 px-2 chain-select__control css-4rl0tx-control"><style data-emotion="css 15pp9oa">.css-15pp9oa</style><div className="chain-select__value-container chain-select__value-container--has-value css-15pp9oa"><style data-emotion="css 7kdrrv-singleValue">.css-7kdrrv-singleValue</style><div className="chain-select__single-value css-7kdrrv-singleValue"><div className="flex items-center gap-1"><div className="aspect-square dark:bg-zinc-600 rounded-full border border-black dark:border-white bg-transparent"></div></div></div><style data-emotion="css 1hac4vs-dummyInput">.css-1hac4vs-dummyInput</style><input id="react-select-chain-select-input"  inputMode="none" aria-autocomplete="list" aria-expanded="false" aria-haspopup="true" role="combobox" aria-readonly="true" className="css-1hac4vs-dummyInput" value=""/></div><style data-emotion="css 10sck9p">.css-10sck9p</style><div className="chain-select__indicators css-10sck9p"><style data-emotion="css xrm9c7-indicatorContainer">.css-xrm9c7-indicatorContainercss-xrm9c7-indicatorContainer:hover</style><div className="chain-select__indicator chain-select__dropdown-indicator css-xrm9c7-indicatorContainer" aria-hidden="true"><style data-emotion="css 8mmkcg">.css-</style><svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-8mmkcg"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg></div></div></div></div></div></div><div className="flex overflow-x-scroll scrollbar-hide overflow-y-hidden w-full justify-center sm:justify-start"><nav className="flex gap-4"><button className="focus-visible:outline-none focus-visible:ring-black dark:focus-visible:ring-white focus-visible:ring-2 focus-visible:rounded justify-center whitespace-nowrap border-b-2 pb-1 text-sm font-medium border-black text-black visited:text-black dark:border-white dark:text-white dark:visited:text-white">Allowances</button><button className="focus-visible:outline-none focus-visible:ring-black dark:focus-visible:ring-white focus-visible:ring-2 focus-visible:rounded justify-center whitespace-nowrap border-b-2 pb-1 text-sm font-medium border-transparent text-zinc-500 visited:text-zinc-500 dark:text-zinc-400 dark:visited:text-zinc-400 hover:border-zinc-300 hover:text-zinc-700 dark:hover:border-zinc-400 dark:hover:text-zinc-300">Signatures</button></nav></div></div><div className="flex flex-col justify-start mx-auto gap-2"><div className="flex flex-col gap-2"><div className="flex justify-start gap-2 flex-col"><style data-emotion="css b62m3t-container">.css-b62m3t-container</style><div className="h-full w-full shrink-0 css-b62m3t-container"><style data-emotion="css 7pg0cj-a11yText">.css-7pg0cj-a11yText</style><span id="react-select-sort-select-live-region" className="css-7pg0cj-a11yText"></span><span aria-live="polite" aria-atomic="false" aria-relevant="additions text" className="css-7pg0cj-a11yText"></span><style data-emotion="css 4rl0tx-control">.css-4rl0tx-control
                        </style><div className="flex items-center box-border h-9 px-2 sort-select__control css-4rl0tx-control"><style data-emotion="css 15pp9oa">.css-15pp9oa</style><div className="sort-select__value-container sort-select__value-container--has-value css-15pp9oa"><style data-emotion="css 7kdrrv-singleValue">.css-7kdrrv-singleValue</style><div className="sort-select__single-value css-7kdrrv-singleValue"><div className="flex items-center gap-2">
                            
                        <Dropdown>
      <Dropdown.Button flat>Sort</Dropdown.Button>
      <Dropdown.Menu aria-label="Static Actions">
        <Dropdown.Item key="new">Asset Name: A to Z</Dropdown.Item>
        <Dropdown.Item key="copy">Asset Name: Z to A</Dropdown.Item>
        <Dropdown.Item key="edit">Allowance: Low to High</Dropdown.Item>
        <Dropdown.Item key="edit">Allowance: High to Low</Dropdown.Item>
        <Dropdown.Item key="edit"> Oldest to Newest</Dropdown.Item>
        <Dropdown.Item key="edit">Newest to Oldest</Dropdown.Item>
        <Dropdown.Item key="delete" color="error">
          Delete file
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>                            
                            </div>
                            </div><style data-emotion="css 1hac4vs-dummyInput">.css-1hac4vs-dummyInput
                        </style><input id="react-select-sort-select-input"  inputMode="none" aria-autocomplete="list" aria-expanded="false" aria-haspopup="true" role="combobox" aria-readonly="true" className="css-1hac4vs-dummyInput" value=""/></div><style data-emotion="css 10sck9p">.css-10sck9p</style><div className="sort-select__indicators css-10sck9p"><style data-emotion="css xrm9c7-indicatorContainer">.css-xrm9c7-indicatorContainercss-xrm9c7-indicatorContainer:hover</style><div className="sort-select__indicator sort-select__dropdown-indicator css-xrm9c7-indicatorContainer" aria-hidden="true"><style data-emotion="css 8mmkcg">.css-8mmkcg</style></div></div></div></div><style data-emotion="css b62m3t-container">.css-b62m3t-container</style><div className="w-full css-b62m3t-container"><style data-emotion="css 7pg0cj-a11yText">.css-7pg0cj-</style><span id="react-select-filters-select-live-region" className="css-7pg0cj-a11yText"></span><span aria-live="polite" aria-atomic="false" aria-relevant="additions text" className="css-7pg0cj-a11yText"></span><style data-emotion="css 4rl0tx-control">.css-4rl0tx-control
                        css-4rl0tx-control:hover</style><div className="flex items-center box-border h-9 px-2 filters-select__control css-4rl0tx-control"><div className="flex items-center gap-2 grow">
                            
                        <Dropdown>
      <Dropdown.Button flat>Filters</Dropdown.Button>
      <Dropdown.Menu aria-label="Static Actions">
        <Dropdown.Item key="new">New file</Dropdown.Item>
        <Dropdown.Item key="copy">Copy link</Dropdown.Item>
        <Dropdown.Item key="edit">Edit file</Dropdown.Item>
        <Dropdown.Item key="delete" color="error">
          Delete file
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>                            
                            </div><style data-emotion="css 10sck9p">.css-10sck9p</style><div className="filters-select__indicators css-10sck9p"><style data-emotion="css xrm9c7-indicatorContainer">.css-xrm9c7-indicatorContainer.css-xrm9c7-indicatorContainer:hover</style><div className="filters-select__indicator filters-select__dropdown-indicator css-xrm9c7-indicatorContainer" aria-hidden="true"><style data-emotion="css 8mmkcg">.css-8mmkcg</style><svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-8mmkcg"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg></div></div></div></div></div><form className="h-9 flex gap-2 items-center border border-black dark:border-white rounded-lg px-2 font-medium focus-within:ring-1 focus-within:ring-black dark:focus-within:ring-white w-full"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6"><path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clip-rule="evenodd"></path></svg><input className="grow focus-visible:outline-none bg-transparent" placeholder="Search by Authorized Spender Address" value=""/></form></div>
                            
                            <div className="relative">
                                <div className=" bg-zinc-300 dark:bg-zinc-700 rounded-lg border border-zinc-400 dark:border-zinc-500 allowances-loader h-screen">
                                    <div className="">
                                        <div className="border border-black dark:border-white rounded-lg overflow-x-scroll whitespace-nowrap scrollbar-hide">
                                            <table className="w-full border-collapse allowances-table">
                                                <thead>
                                                    <tr className="border-b border-black dark:border-white h-10"><th className="text-left px-2 whitespace-nowrap"><div className="font-bold text-left">Asset</div></th><th className="text-left px-2 whitespace-nowrap"><div className="font-bold text-left">Type</div></th><th className="text-left px-2 whitespace-nowrap"><div className="font-bold text-left">Allowance</div></th><th className="text-left px-2 whitespace-nowrap"><div className="font-bold text-left">Authorized Spender</div></th><th className="text-left px-2 whitespace-nowrap"><div className="font-bold text-left">Last Updated</div></th><th className="text-left px-2 whitespace-nowrap"><div className="font-bold text-right">Actions</div></th></tr></thead></table><div className="flex flex-col justify-center items-center p-3 gap-2 w-full h-10"></div></div></div></div><div className="absolute inset-0 flex justify-center items-center"></div></div></div></main>
 
        </div>
    </div>
  )
}

export default revoke
