Feature:This function is responsible for testing the functionality of the page tariff page

  Scenario Outline:Checking that the currency is changing
    Given Guest open Home Page
    When Clicks on the section with tariffs
    And Selects the <currencyName> currency
    Then Available services' prices are displayed in <currencySymbol>
    Examples:
      | currencyName | currencySymbol |
      | eur          | €              |
      | usd          | $              |
      | uah          | ₴              |