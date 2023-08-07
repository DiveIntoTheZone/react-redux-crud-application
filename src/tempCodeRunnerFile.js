
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/events/new" element={<EventsNew />} /> 
        <Route path="/" element={<EventsIndex />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
reportWebVitals();