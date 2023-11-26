Feature:This function is responsible for testing the functionality of the page tariff page

  Scenario Outline: Check the change in the cost of services for working only with employees depending on the number of employees in tree month
    Given Guest open Home Page
    When Clicks on the section with tariffs
    And Selects the uah currency
    When Selects the number of employees <numberEmployees>
    Then Check that the price for the service is the following <price>
    Examples:
      | numberEmployees | price              |
      | 1 – 30          | 2271.1             |
      | 31– 50          | 4217.7             |
      | 51– 100         | 6488.8             |
      | 101 – 150       | 8759.8             |
      | 150 – 200       | 9733.1             |
      | 201 – 250       | 12166.4            |
      | 251 – 300       | 14599.7            |
      | > 300           | Індивідуальна ціна |