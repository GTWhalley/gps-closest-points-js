A simple beginner program to test my understanding of for loops and nested arrays. 

The GPS coordinates are randomly created, with no specific structure other than ensuring latitude and longitude fall within their respective ranges. Using the Haversine Formula, these distance between these coordinates are then calculated and fed into a new array that is updated on each iteration of the for loops in order to find the points with the shortest distance between them. If a pair is found to have a shorter distance than the previously found closest pair then the new will replace the old. Once the points are exhausted, the final pair found is definitively the closest pair. 

I did not account for the odd occasion where two randomly generated gps coordinates are identical, and put no safeguards in place to prevent that from happening at this time. 
