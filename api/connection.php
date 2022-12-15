										<?php
									// Create connection
                                   $conn = mysqli_connect("127.0.0.1", "root", "", "ecoflux", "3307");

                                   // Check connection
                                   if (!$conn) {
                                    die("Connection failed: " . mysqli_connect_error());
                                    }
                                         
										  ?>