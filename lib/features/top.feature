Feature: Top view of VP web, user can navigate to other page from top page


Scenario: Verify home icon
    """
    C10077
    """
    When I click home icon
    Then I should in unlimited page


Scenario: Verify home icon (bad example)
    When I click home icon
    Then I should in freemium page
