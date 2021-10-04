import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Navbar from "../components/Navbar/Navbar";
import { Router } from 'react-router-dom';
import {createMemoryHistory} from 'history'
import Movies from "../components/Movies_Series/Movies"
import App from "../App";
import { Provider } from "react-redux";
import store from "../store/store"
import Home from "../components/Home/Home"
import axios from "axios"
import {getSampleJson} from "../actions/action"

jest.mock('axios');


describe("App",() => {
    test('movies', () => {
    const history = createMemoryHistory()
    history.push('/movies')
    render(
        <Provider store={store}>      
            <Router history={history}>
                <App />
            </Router>
        </Provider>
    )
    expect(screen.getByText(/movies/i)).toBeInTheDocument() 
    })
})


describe("Navbar", () => {
    let component: any;
    beforeEach(() =>  {
        const history = createMemoryHistory()
            component = render(
            <Router history={history}> 
            <Navbar title="Popular shorts"/>
        </Router>,
        )}
    )
        
    test("must display a text especific", () => {  
        expect(screen.getByText(/DEMO Streaming/i)).toBeInTheDocument()
    });

    test("must display a button", () => {
       const btn = component.getByText(/start your free trial/i)
        expect(btn).toBeDefined()
    });
    test("should render the received props as a subtitle", () => {
        expect(screen.getByText(/Popular shorts/i)).toBeInTheDocument()
    });
})
