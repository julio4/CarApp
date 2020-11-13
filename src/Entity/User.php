<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=UserRepository::class)
 */
class User implements UserInterface
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=50, unique=true)
     * @Assert\NotBlank (
     *     message="Merci de saisir votre nom"
     * )
     * @Assert\Length (
     *      min = 2,
     *      max = 50,
     *      minMessage = "Votre mot de passe doit contenir au minimum {{ limit }} caractères",
     *      maxMessage = "Votre mot de passe peut contenir au maximum {{ limit }} caractères",
     *      allowEmptyString=false
     * )
     * @Assert\Regex(
     *     pattern="#^[a-zA-Z\-\é\è\ê\ë\ï\ö|\s]{2,50}$#",
     *     match=true,
     *     message="Merci de saisir un nom valide"
     * )
     */
    private $name;

    /**
     * @ORM\Column(type="json")
     * @Assert\NotBlank
     */
    private $roles = [];

    /**
     * @var string The hashed password
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank (
     *     message="Merci de saisir un mot de passe"
     * )
     * @Assert\Length (
     *      min = 12,
     *      max = 255,
     *      minMessage = "Votre nom doit contenir au minimum {{ limit }} caractères",
     *      maxMessage = "Votre nom peut contenir au maximum {{ limit }} caractères",
     *      allowEmptyString=false
     * )
     * @Assert\Regex (
     *     pattern="#^[!-~àèìòùäëïöüÿéâêîôûÀÈÌÒÙÄËÏÖÜÂÊÎÔÛ]{12,128}$#",
     *     match=true,
     *     message="Merci de saisir un mot de passe valide"
     * )
     */
    private $password;

    /**
     * @ORM\Column(type="string", length=255, unique=true)
     * @Assert\NotBlank (
     *      message = "Merci de saisir une adresse mail"
     * )
     * @Assert\Regex (
     *     pattern="#^[^\W][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\@[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\.[a-zA-Z]{2,6}$#",
     *     match=true,
     *     message="Merci de saisir une adresse mail valide"
     * )
     */
    private $email;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUsername(): string
    {
        return (string) $this->name;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        if(empty($roles)) {
            $roles[] = 'ROLE_USER';
        }

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getPassword(): string
    {
        return (string) $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getSalt()
    {
        // not needed when using the "bcrypt" algorithm in security.yaml
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function checkIfAdmin(): bool
    {
        return (bool) in_array("ROLE_ADMIN", $this->getRoles());
    }

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Car", mappedBy="renter")
     */
    private $cars;

    /**
     * @ORM\OneToMany(targetEntity=Rent::class, mappedBy="user", orphanRemoval=true)
     */
    private $rentals;

    public function __construct()
    {
        $this->cars = new ArrayCollection();
        $this->rentals = new ArrayCollection();
    }

    /**
     * @return Collection|Car[]
     */
    public function getCars(): Collection
    {
        return $this->cars;
    }

    public function addCar(Car $car): self
    {
        if (!$this->cars->contains($car)) {
            $this->cars[] = $car;
            $car->setRenter($this);
        }
        return $this;
    }

    public function removeCar(Car $car): self
    {
        if ($this->cars->contains($car)) {
            $this->cars->removeElement($car);
            // set the owning side to null (unless already changed)
            if ($car->getType() === $this) {
                $car->setType(null);
            }
        }
        return $this;
    }

    /**
     * @return Collection|Rent[]
     */
    public function getRentals(): Collection
    {
        return $this->rentals;
    }

    public function addRent(Rent $rent): self
    {
        if (!$this->rentals->contains($rent)) {
            $this->rentals[] = $rent;
            $rent->setUser($this);
        }

        return $this;
    }

    public function removeRent(Rent $rent): self
    {
        if ($this->rentals->contains($rent)) {
            $this->rentals->removeElement($rent);
            // set the owning side to null (unless already changed)
            if ($rent->getUser() === $this) {
                $rent->setUser(null);
            }
        }

        return $this;
    }

}
