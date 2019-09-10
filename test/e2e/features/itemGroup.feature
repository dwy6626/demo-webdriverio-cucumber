Feature: Top view of VP web, user can navigate to other page from top page

Scenario: Verify item group in each section
    """
    C353749
    """
    When I go to unlimited page
    Then Max 15 items in each item group

    When I go to ppv page
    Then Max 15 items in each item group

    When I go to freemium page
    Then Max 15 items in each item group
