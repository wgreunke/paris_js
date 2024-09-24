Make a React app that:

1) Uses standard componenents as much as possible.
2) Defines the components in the same file ass App.js.
3) Does not use any @ import references.

The app lets people plan a trip to a city and allows them to see the location of the different places on their map so they can determine the best route when planning their day.
The user drags a place from a maybe box to a plan box.  The places that are in the plan box show up on the map with a line that connects the different places representing the route that they would visit the places.



# The app should have the following components:
1) CitySelector
2) PlaceSorter
3) MapDrawer
4) DataFetcher

# Here is what each of the components does:

# Component CitySelector
This lets you choose a city that you want to visit.  It is shown at the top of the page.
Return:
The CitySelector shows a dropdown that has the following cities:
Amsterdame
Barcelona
Berlin
Italy
Paris
Rome
Oslo

Action:
When the user selects a city, the PlacesSorter resets using the new city.

# Component PlaceSorter
This component lets you choose which places to show on the map.  The user drags places from the maybe box to the plan box to be shown on the map.

Return:
The PlaceSorter draws two boxes.  The top box is the plan box.  The bottom box is the maybe box.  
When a new city is chosen, the maybe box is prepopulated with a list of places for the city.
The user then drags a place from the maybe box to the plan box.  When a place is dragged to the plan box, the MapDrawer component updates to show the new place on the map.
The places for the maybe box are pulled from the DataFetcher component.


# Component Mapdrawer
This draws a map that is zoomed into the city that is chosen in the CitySelector.
As places are draged from the maybe box to plan box, the map shows the place.  A line is drawn starting from the first item in the plan box and connects to the next place.  More lines are drawn as each new place is added to the plan.

# Component DataFetecher
This defines the places data.  When a city is selected, the DataFetcher will return a list of places for that particular city to be used in the PlaceSorter component.
The DataFetcher has a prebuilt set of data that lists the name of the place, the lattitude, the longitude and city as follows: 

Place   Lattitude  Longitude  City
Eiffel Tower	48.8584	2.2945	Paris
Louvre Museum	48.8606	2.3376	Paris
Arc de Triomphe	48.8738	2.295	Paris
Champs-Élysées	48.8697	2.3073	Paris
Montmartre and Sacré-Cœur	48.8867	2.3431	Paris
Moulin Rouge	48.8843	2.3323	Paris
Seine River	48.8584	2.2945	Paris
Luxembourg Gardens	48.8462	2.3372	Paris
Tuileries Garden	48.8635	2.3275	Paris
Palace of Versailles	48.8049	2.1204	Paris
Colosseum	41.8902	12.4924	Rome
St. Peter’s Square	41.9062	12.4536	Rome
Trevi Fountain	41.9009	12.4833	Rome
Pantheon	41.8986	12.4769	Rome
Roman Forum	41.8925	12.4853	Rome
Piazza Navona	41.8992	12.4733	Rome
Spanish Steps	41.9056	12.4823	Rome
Villa Borghese Gardens	41.9146	12.4924	Rome
Capitoline Hill	41.8931	12.4828	Rome
Trastevere	41.8879	12.4694	Rome
Barbican	51.5202	-0.093	London
London Eye	51.5033	-0.1195	London
Postman's Park	51.5167	-0.0978	London
The Mail Rail	51.5199	-0.1096	London
Highgate Cemetery	51.5665	-0.1478	London
Tower of London	51.5081	-0.0759	London
British Museum	51.5194	-0.127	London
Tate Modern	51.5076	-0.0994	London
Covent Garden	51.5117	-0.1226	London
Westminster Abbey	51.4994	-0.127	London
Oslo Opera House	59.9139	10.7383	Oslo
Vigeland Sculpture Park	59.9056	10.7496	Oslo
Viking Ship Museum	59.9048	10.7461	Oslo
Norwegian Museum of Cultural History	59.9048	10.7461	Oslo
Akershus Fortress	59.9102	10.7569	Oslo










